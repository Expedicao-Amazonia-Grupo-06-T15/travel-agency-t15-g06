import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ItemCard } from '../ItemCard';

export const HotelsSection = () => {

  const {hotels} = useContext(ReservationsContext);

  return (
    <section>
      <h1>Hotéis</h1>
      <p>
        Nossas acomodações integram modernidade e conforto em meio a natureza.
      </p>
      <ul>
        {hotels ? hotels.map(hotel => <ItemCard key={hotel.id} name={hotel.name} img={hotel.img} description={hotel.description} id={hotel.id} price={hotel.price}/>) : null}
      </ul>
    </section>
  );
};
