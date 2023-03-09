export interface IHotel {
  id: number;
  name: string;
  price: number;
  address: string;
  img: string;
  reviews: null;
  rooms: number;
  description: string;
}

export interface IReservedHotel {
  id: number;
  userId: number;
  hotelId: number;
  dates: {
    startDate: string;
    endDate: string;
  };
  hotel: IHotel;
}
