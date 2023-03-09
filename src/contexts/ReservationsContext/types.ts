import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface IReservationsContext {
  selectedHotel: string;
  handleHotelChange: (e: SelectChangeEvent) => void;
  hotels: IHotel[] | null;
  activityType: string;
  activityTypeChange: (e: SelectChangeEvent) => void;
  activities: IActivity[] | null;
  isLoading: boolean;
  setHotels: React.Dispatch<React.SetStateAction<IHotel[] | null>>;
  getAllHotels: () => Promise<void>;
  submit: SubmitHandler<IFilter>;
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
  description: string;
}

export interface IActivity {
  id: number;
  name: string;
  price: number;
  type: string;
  img: string;
  reviews: null | number;
  description: string;
}

export interface IFilter {
  selectHotel: string;
  activityType: string;
  dates: Date[];
}

export interface IReservetions {
  id: number;
  userId: number;
  hotelId: number;
  dates: IDates;
}

export interface IDates {
  startDate: string;
  endDate: string;
}
