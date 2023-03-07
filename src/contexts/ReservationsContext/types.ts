import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';

export interface IReservationsContext {
  selectedHotel: string;
  handleHotelChange: (e: SelectChangeEvent) => void;
  hotels: IHotel[] | null;
  activityType: string;
  activityTypeChange: (e: SelectChangeEvent) => void;
}

export interface IReservationsContextProps {
  children: ReactNode;
}

export interface IHotel {
  address: string;
  id: number;
  img: string;
  name: string;
  price: number;
  reviews: number | null;
  rooms: number;
}
