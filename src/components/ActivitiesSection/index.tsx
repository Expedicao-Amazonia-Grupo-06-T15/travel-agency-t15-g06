import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ActivityCard } from '../ActivityCard';

export const ActivitiesSection = () => {
  const { activities } = useContext(ReservationsContext);

  return (
    <section>
      <h1>Passeios</h1>
      <p>Escolha entre passeios aquáticos, jungle tours, culturais e mais!</p>
      <ul>
        {activities ? activities.map(activity => <ActivityCard key={activity.id} name={activity.name} img={activity.img} description={activity.description}/>) : null}
      </ul>
    </section>
  );
};
