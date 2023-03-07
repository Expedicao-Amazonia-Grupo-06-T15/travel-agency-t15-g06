import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ItemCard } from '../ItemCard';

export const ActivitiesSection = () => {
  const { activities } = useContext(ReservationsContext);

  return (
    <section>
      <h1>Passeios</h1>
      <p>Escolha entre passeios aquáticos, jungle tours, culturais e mais!</p>
      <ul>
        {activities ? activities.map(activity => <ItemCard key={activity.id} name={activity.name} id={activity.id} img={activity.img} description={activity.description}/>) : null}
      </ul>
    </section>
  );
};
