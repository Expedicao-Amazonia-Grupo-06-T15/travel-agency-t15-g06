import { SelectChangeEvent } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../../services/api';
import {
  IActivity,
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
  const [selectedHotel, setSelectedHotel] = useState<IHotel[] | string>('');
  const [hotels, setHotels] = useState<IHotel[] | null>(null);
  const [activities, setActivities] = useState<IActivity[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reservedHotels, setReservedHotels] = useState<IReservetions[] | null>(
    null
  );
  const [activityType, setActivityType] = useState('');
  const [hotelOptions, setHotelOptions] = useState<IHotel[] | null>(null);

  const activityTypeChange = (e: SelectChangeEvent): void => {
    setActivityType(e.target.value);
  };

  // const handleHotelChange = (e: SelectChangeEvent): void => {
  //   if (e.target.value === 'allHotels') {
  //     setSelectedHotel(hotelOptions); // ver esse erro de type
  //   }
  //   setSelectedHotel(e.target.value);
  // };

  const handleHotelChange = (e: SelectChangeEvent): void => {
    if (e.target.value === 'allHotels') {
      setSelectedHotel(hotelOptions); // set to array of hotel objects
    } else {
      const selectedHotel = hotelOptions?.find(
        (hotel) => hotel.name === e.target.value
      );
      setSelectedHotel(selectedHotel); // set to selected hotel object
    }
  };

  const getAllHotels = async (): Promise<void> => {
    try {
      const response = await api.get<IHotel[]>('hotels');
      setHotels(response.data);
      setHotelOptions(response.data);
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
      console.log(response.data);
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

  const submit: SubmitHandler<IFilter> = async (data: IFilter) => {
    setIsLoading(true);

    const { selectHotel, activityType, dates } = data;

    console.log(data);

    const token = localStorage.getItem('@TOKEN');

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

      if (dates && (selectHotel === '' || selectHotel === 'allHotels')) {
        console.log('primeiro if');

        const formatedDates = dates.map((date) => date.toLocaleDateString());
        const unavailableHotelsById = reservedHotels.data.map((reservation) => {
          const reservedDates = Object.values(reservation.dates);

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
          setHotels([...filteredHotels]); //  ver esse erro depois;
        }
      } else if (!dates && selectHotel !== '' && selectHotel !== 'allHotels') {
        console.log('segundo if');

        if (selectedHotelInfos) {
          setHotels(selectedHotelInfos);
        }
      } else if (selectHotel === 'allHotels') {
        console.log('terceiro if');
        setHotels(hotelOptions);
      } else {
        console.log('quarto if');
        const formatedDates = dates.map((date) => date.toLocaleDateString());

        const isHotelReservedOnSelectedDate = reservedHotels.data.find(
          (reservation) => {
            const { startDate, endDate } = reservation.dates;

            if (selectedHotelInfos) {
              if (
                reservation.id === selectedHotelInfos[0].id &&
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
          // renderizar aviso de que o hotel esta ocupado
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
        activityType,
        activityTypeChange,
        activities,
        isLoading,
        setHotels,
        getAllHotels,
        submit,
        hotelOptions,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};
