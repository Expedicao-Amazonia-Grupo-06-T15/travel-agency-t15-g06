import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { ItemCard } from '../ItemCard';
import {
  ActivitiesList,
  MainActivities,
  TextSection,
  TitleSection,
} from './style';

export const ActivitiesSection = () => {
  const { activities, isLoading, selectedActivityType } =
    useContext(ReservationsContext);

  return (
    <MainActivities>
      <TitleSection>Passeios</TitleSection>
      <TextSection>
        Escolha entre passeios aquáticos, jungle tours, culturais e mais!
      </TextSection>
      {!isLoading ? (
        <ActivitiesList>
          {activities
            ? activities.map((activity) => (
                <div key={`activity-${activity.id}`}>
                  <ItemCard
                    name={activity.name}
                    id={activity.id}
                    img={activity.img}
                    description={activity.description}
                    showPrice={false}
                    showFacilities={false}
                  />
                </div>
              ))
            : null}{' '}
        </ActivitiesList>
      ) : (
        <p>Carregando...</p>
      )}
    </MainActivities>
  );
};
