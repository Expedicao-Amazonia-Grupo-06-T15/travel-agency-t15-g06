import { SelectChangeEvent } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { api } from '../../services/api';
import {
  IActivity,
  IAddReservation,
  IFilter,
  IHotel,
  IReservationsContext,
  IReservationsContextProps,
  IReservetions,
} from './types';

export const ReservationsContext = createContext<IReservationsContext>(
  {} as IReservationsContext
);

export const ReservationsProvider = ({
  children,
}: IReservationsContextProps) => {
  const allHotels = { address: '',
  id: 0,
  img: '',
  name: 'Todos os Hoteis',
  price: 0,
  reviews: 0,
  rooms: 0,
  description: ''};
  const [selectedHotel, setSelectedHotel] = useState<IHotel>(allHotels);
  const [hotels, setHotels] = useState<IHotel[] | null>(null);
  const [activities, setActivities] = useState<IActivity[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reservedHotels, setReservedHotels] = useState<IReservetions[] | null>(
    null
  );
  const [selectedActivityType, setSelectedActivityType] = useState<string>('');
  const [hotelOptions, setHotelOptions] = useState<IHotel[] | null>(null);
  const [dates, setDates] = useState<Date[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    return;
  }, [selectedHotel]);

  const handleHotelChange = (e: SelectChangeEvent): void => {
    if (e.target.value === 'allHotels') {
      setSelectedHotel(allHotels);
    } else {
      const selectedHotel = hotelOptions?.find(
        (hotel) => hotel.name === e.target.value
      );
      if(selectedHotel){
        setSelectedHotel(selectedHotel);

      };
    }
  };

  const getAllHotels = async (): Promise<void> => {
    try {
      const response = await api.get<IHotel[]>('hotels');
      setHotels(response.data);
      setHotelOptions([...[{name: 'Todos os Hoteis', address: '',
      id: 0,
      img: '',
      price: 0,
      reviews: 0,
      rooms: 0,
      description: ''}],...response.data, ]);
      setSelectedHotel(allHotels);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllActivities = async () => {
    try {
      const response = await api.get<IActivity[]>('/activities');
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllHotels();
    getAllActivities();
  }, []);

  const reservedHotelsByDate = (
    date1Start: string,
    date1End: string,
    date2Start: string,
    date2End: string
  ) => {
    const start1 = new Date(date1Start);
    const end1 = new Date(date1End);
    const start2 = new Date(date2Start);
    const end2 = new Date(date2End);

    return start1 < end2 && start2 < end1;
  };

  const confirmHotelReservation = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const token = localStorage.getItem('@TOKEN');
    const userIdValue = localStorage.getItem('@USERID');
    const hotelIdValue = e.currentTarget.id;

    const data = {
      userId: userIdValue,
      hotelId: hotelIdValue,
    };
    const jsonData = JSON.stringify(data);

    try {
      const confirmReservation = await api.post<IAddReservation>(
        '/reservedHotels',
        jsonData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const submit: SubmitHandler<IFilter> = async (data: IFilter) => {
    setIsLoading(true);

    const { selectHotel } = data;
    const objData = { selectHotel, dates };
    const token = localStorage.getItem('@TOKEN');
    console.log(data);

    try {
      const reservedHotels = await api.get<IReservetions[]>('/reservedHotels', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReservedHotels(reservedHotels.data);

      const selectedHotelInfos: IHotel[] | undefined = hotelOptions?.filter(
        (hotel) => hotel.name == selectHotel
      );

      if (dates && (selectHotel === '' || selectHotel === 'Todos os Hoteis')) {
        const formatedDates = dates.map((date: Date) =>
          date.toLocaleDateString()
        );
        const unavailableHotelsById = reservedHotels.data.map((reservation) => {
          const reservedDates = Object.values(reservation.dates).toString();
          console.log(reservedDates);

          if (
            reservedHotelsByDate(
              formatedDates[0],
              formatedDates[1],
              reservedDates[0],
              reservedDates[1]
            )
          ) {
            return reservation.hotelId;
          }
        });

        if (unavailableHotelsById.length > 0) {
          const filteredHotels = hotelOptions?.filter(
            (hotel) => !unavailableHotelsById.includes(hotel.id)
          );
          if(filteredHotels){
            setHotels([...filteredHotels]); //  ver esse erro depois;

          };
        }
      } else if (!dates && selectHotel !== '' && selectHotel !== 'Todos os Hoteis') {
        if (selectedHotelInfos) {
          setHotels(selectedHotelInfos);
        }
      } else if (selectHotel === 'Todos os Hoteis') {
        setHotels(hotelOptions);
      } else {
        const formatedDates = dates.map((date) => date.toLocaleDateString());

        const isHotelReservedOnSelectedDate = reservedHotels.data.find(
          (reservation) => {
            const { startDate, endDate } = reservation.dates;

            if (selectedHotelInfos) {
              if (
                reservation.hotelId === selectedHotelInfos[0].id &&
                reservedHotelsByDate(
                  formatedDates[0],
                  formatedDates[1],
                  startDate,
                  endDate
                )
              ) {
                return reservation;
              }
            }
          }
        );

        if (isHotelReservedOnSelectedDate) {
          toast.warning('Este hotel já está reservado nessas datas');
        } else {
          if (selectedHotelInfos) {
            setHotels(selectedHotelInfos);
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReservationsContext.Provider
      value={{
        selectedHotel,
        handleHotelChange,
        hotels,
        selectedActivityType,
        activities,
        isLoading,
        setHotels,
        getAllHotels,
        submit,
        hotelOptions,
        setDates,
        confirmHotelReservation,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};
