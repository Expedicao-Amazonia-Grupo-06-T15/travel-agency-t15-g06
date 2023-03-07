import { SelectChangeEvent } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { IHotel, IReservationsContext, IReservationsContextProps } from './types';

export const ReservationsContext = createContext<IReservationsContext>({} as IReservationsContext);

export const ReservationsProvider = ({children}: IReservationsContextProps) => {
  const [selectedHotel, setSelectedHotel] = useState('');
  const [hotels, setHotels] = useState<IHotel[] | null>(null);

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
      console.log(response.data);
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getAllHotels();

  }, []);

  return (
    <ReservationsContext.Provider value={{
      selectedHotel,
      handleHotelChange,
      hotels,
      activityType,
      activityTypeChange
    }}>
      {children}
    </ReservationsContext.Provider>
  );
};