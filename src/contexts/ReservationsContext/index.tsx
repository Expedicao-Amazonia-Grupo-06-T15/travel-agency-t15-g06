import { SelectChangeEvent } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { api } from '../../services/api';
import { IActivity, IFilter, IHotel, IReservationsContext, IReservationsContextProps, IReservetions } from './types';

export const ReservationsContext = createContext<IReservationsContext>({} as IReservationsContext);

export const ReservationsProvider = ({children}: IReservationsContextProps) => {
  const [selectedHotel, setSelectedHotel] = useState('');
  const [hotels, setHotels] = useState<IHotel[] | null>(null);
  const [activities, setActivities] = useState<IActivity[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [activityType, setActivityType] = useState('');

  const activityTypeChange = (e: SelectChangeEvent): void => {
    setActivityType(e.target.value);
  };

  const handleHotelChange = (e: SelectChangeEvent): void => {
    setSelectedHotel(e.target.value);
  };

  const getAllHotels = async (): Promise<void> => {
    try {
      const response = await api.get<IHotel[]>('hotels');
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllActivities = async  () => {
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

  const reservedHotelsByDate = (date1Start: string, date1End: string, date2Start: string, date2End: string) => {

    const start1 = new Date(date1Start);
    const end1 = new Date(date1End);
    const start2 = new Date(date2Start);
    const end2 = new Date(date2End);

   
    return (start1 < end2) && (start2 < end1);
    
  };

  const submit: SubmitHandler<IFilter> = async (data: IFilter)  => {

    const {selectHotel, activityType, dates} = data;

    console.log(data);

    const token = localStorage.getItem('@TOKEN');

    if(dates && selectHotel === ''){
      try {
        const reservedHotels = await api.get<IReservetions[]>('/reservedHotels', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const formatedDates = dates.map(date => date.toLocaleDateString());

        const unavailableHotelsById = reservedHotels.data.map(reservation => {

          const reservedDates = Object.values(reservation.dates);

         if(reservedHotelsByDate(formatedDates[0], formatedDates[1], reservedDates[0], reservedDates[1])){
          return reservation.hotelId;
         }
        });

        if(unavailableHotelsById.length > 0){
          const filteredHotels = hotels?.filter(hotel => !unavailableHotelsById.includes(hotel.id));
          setHotels([...filteredHotels]); //  ver esse erro depois;
        }

      } catch (error) {
        console.log(error);
      }
    }

  };

  return (
    <ReservationsContext.Provider value={{
      selectedHotel,
      handleHotelChange,
      hotels,
      activityType,
      activityTypeChange,
      activities,
      isLoading,
      setHotels,
      getAllHotels,
      submit

    }}>
      {children}
    </ReservationsContext.Provider>
  );
};