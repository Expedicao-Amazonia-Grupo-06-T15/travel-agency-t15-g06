import React, { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { CardHotel, HotelInfosReserved, MainContainer } from './style';

export const UserDashboard = () => {
  const { selectedHotel } = useContext(ReservationsContext);

  return (
    <MainContainer>
      {selectedHotel ? (
        <CardHotel>
          <div style={{ width: '128px', height: '90px', overflow: 'hidden' }}>
            <div
              style={{
                backgroundImage: `url(${selectedHotel.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <HotelInfosReserved>
            <p>{selectedHotel.name}</p>
            <span>R$ {selectedHotel.price}/noite</span>
          </HotelInfosReserved>
        </CardHotel>
      ) : (
        <p>Nenhum hotel selecionado ainda!</p>
      )}
    </MainContainer>
  );
};
