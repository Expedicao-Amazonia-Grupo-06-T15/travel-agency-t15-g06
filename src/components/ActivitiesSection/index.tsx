import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ItemCard } from '../ItemCard';

export const ActivitiesSection = () => {
  const { activities, isLoading, selectedActivityType } =
    useContext(ReservationsContext);

  return (
    <section>
      <h1>Passeios</h1>
      <p>Escolha entre passeios aquáticos, jungle tours, culturais e mais!</p>
      {!isLoading ? (
        <ul>
          {activities
            ? activities.map((activity) => (
                <div key={`activity-${activity.id}`}>
                  <ItemCard
                    name={activity.name}
                    id={activity.id}
                    img={activity.img}
                    description={activity.description}
                  />
                </div>
              ))
            : null}{' '}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
};
