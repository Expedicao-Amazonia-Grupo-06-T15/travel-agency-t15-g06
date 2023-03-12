import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IHotel, IReservedHotel } from './types';
import { api } from '../../services/api';

export const UserDashboard = ({ selectedHotel }: { selectedHotel: IHotel }) => {
  const { user } = useContext(UserContext);
  const [reservedHotels, setReservedHotels] = useState<IReservedHotel[]>([]);
  const token = localStorage.getItem('@TOKEN');
  const filteredReservations = reservedHotels.filter(
    (reservation) => reservation.hotel.id === selectedHotel.id
  );

  useEffect(() => {
    const getReservedHotels = async () => {
      try {
        if (user !== null && selectedHotelId !== null) {
          const response = await api.get<IReservedHotel[]>(
            `/reservedHotels?userId=${user.id}&hotelId=${selectedHotelId}`
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // }
          );
          // console.log(response.data);
          setReservedHotels(response.data);
          console.log(setReservedHotels);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getReservedHotels();
  }, [user, selectedHotelId]);

  return (
    <div>
      <h1>Hotel selecionado</h1>
      {filteredReservations.map((reservedHotel) => (
        <div key={reservedHotel.id}>
          <h2>{reservedHotel.hotel.name}</h2>
          <p>{reservedHotel.hotel.img}</p>
          <span>{reservedHotel.price}</span>
        </div>
      ))}
    </div>
  );
};
