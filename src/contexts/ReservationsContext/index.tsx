import { SelectChangeEvent } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { IActivity, IHotel, IReservationsContext, IReservationsContextProps } from './types';

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

  // const checkHotelAvailability = () => {

  // };

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
      getAllHotels

    }}>
      {children}
    </ReservationsContext.Provider>
  );
};