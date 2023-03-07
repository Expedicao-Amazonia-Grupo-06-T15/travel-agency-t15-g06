import { Li } from './style';

export const ActivityCard = ({ name, img, id, description }: any) => {
  // colocar reviews, ver com as meninas sobre

  return (
    <Li>
      <img src={img} alt={name} />
      <div>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
    </Li>
  );
};
