import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ItemCard } from '../ItemCard';
import { ItemsContainer } from '../ItemCard/style';
import {
  AccommodationSection,
  ConfirmationButton,
  HotelsList,
  TextSection,
  TitleSection,
} from './style';

export const HotelsSection = () => {
  const { hotels, isLoading, selectedHotel, confirmHotelReservation } =
    useContext(ReservationsContext);

  return (
    <AccommodationSection>
      <TitleSection>Hotéis</TitleSection>
      <TextSection>
        Nossas acomodações integram modernidade e conforto em meio a natureza.
      </TextSection>
      {!isLoading ? (
        <HotelsList>
          {hotels
            ? hotels.map((hotel) => (
                <ItemsContainer key={hotel.id}>
                  <ItemCard
                    name={hotel.name}
                    img={hotel.img}
                    description={hotel.description}
                    id={hotel.id}
                    price={hotel.price}
                    showPrice={true}
                    showFacilities={true}
                    reviews={hotel.reviews}
                  />
                  {selectedHotel && (
                    <ConfirmationButton
                      key={`button-${hotel.id}`}
                      id={hotel.id.toString()}
                      onClick={confirmHotelReservation}
                    >
                      Confirmar reserva
                    </ConfirmationButton>
                  )}
                </ItemsContainer>
              ))
            : null}
        </HotelsList>
      ) : (
        <p>Carregando...</p>
      )}
    </AccommodationSection>
  );
};
