import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { IReservedHotel } from './types';
import { api } from '../../services/api';

export const UserDashboard = () => {
  const { user } = useContext(UserContext);
  const [reservedHotels, setReservedHotels] = useState<IReservedHotel[]>([]);

  useEffect(() => {
    const getReservedHotels = async () => {
      try {
        if (user !== null) {
          const response = await api.get<IReservedHotel[]>(
            `/reservedHotels?userId=${user.id}`
          );
          console.log(response);
          setReservedHotels(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getReservedHotels();
  }, [user]);

  return (
    <div>
      <h1>My Reserved Hotels</h1>
      {reservedHotels.map((reservedHotel) => (
        <div key={reservedHotel.id}>
          <h2>{reservedHotel.hotel.name}</h2>
          <p>{reservedHotel.hotel.img}</p>
        </div>
      ))}
    </div>
  );
};
