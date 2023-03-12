import React, { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';

export const UserDashboard = () => {
  const { selectedHotel } = useContext(ReservationsContext);

  return (
    <div>
      {selectedHotel ? (
        <div>
          <h2>Hotel selecionado:</h2>
          <p>Nome: {selectedHotel.name}</p>
          <img src={selectedHotel.img} alt={selectedHotel.name} />
          <p>Preço por dia: {selectedHotel.price}</p>
        </div>
      ) : (
        <p>Nenhum hotel selecionado ainda!</p>
      )}
    </div>
  );
};
