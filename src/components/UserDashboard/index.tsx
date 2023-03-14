import React, { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { CardHotel, HotelInfosReserved, MainContainer } from './style';
export const UserDashboard = () => {
  const { selectedHotelDashboard } = useContext(ReservationsContext);
  return (
    <MainContainer>
      {selectedHotelDashboard ? (
        <CardHotel>
          <div style={{ width: '128px', height: '90px', overflow: 'hidden' }}>
            <div
              style={{
                backgroundImage: `url(${selectedHotelDashboard[0].img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <HotelInfosReserved>
            <p>{selectedHotelDashboard[0].name}</p>
            <span>R$ {selectedHotelDashboard[0].price}/noite</span>
          </HotelInfosReserved>
        </CardHotel>
      ) : (
        <p>Nenhum hotel selecionado ainda!</p>
      )}
    </MainContainer>
  );
};
