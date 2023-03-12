import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface IReservationsContext {
  selectedHotel: IHotel | null;
  handleHotelChange: (e: SelectChangeEvent) => void;
  hotels: IHotel[] | null;
  selectedActivityType: string;
  activityTypeChange: (e: SelectChangeEvent) => void;
  activities: IActivity[] | null;
  isLoading: boolean;
  setHotels: React.Dispatch<React.SetStateAction<IHotel[] | null>>;
  getAllHotels: () => Promise<void>;
  submit: SubmitHandler<IFilter>;
  hotelOptions: IHotel[] | null;
  setDates: React.Dispatch<React.SetStateAction<Date>>;
  confirmHotelReservation: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  reviews: number;
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
  dates: [Date, Date];
}

export interface IReservetions {
  id: number;
  userId: number;
  hotelId: number;
  dates: [Date, Date];
}

export interface IAddReservation {
  id: number;
  userId: number;
  hotelId: number;
}
