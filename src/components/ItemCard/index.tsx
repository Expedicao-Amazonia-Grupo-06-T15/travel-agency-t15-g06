import { Rating, Typography } from '@mui/material';
import { Li } from './style';

interface IItemCardProps {
  name: string;
  img: string;
  id: number;
  description: string;
  price?: number;
  reviews?: number;
}

export const ItemCard = ({
  name,
  img,
  description,
  price,
  reviews,
}: IItemCardProps) => {
  const handleClick = (): void => {
    console.log(id);
    // usar o Id aqui para abrir pagina e renderizar infos da atividade
  };

  return (
    <Li onClick={handleClick}>
      <img src={img} alt={name} />
      <div>
        <h6>{name}</h6>
        <p>{description}</p>
        <p>R$ {price}/noite</p>
        {reviews ? (
          <>
            <Typography component='legend'>Reviews</Typography>
            <Rating name='reviews' value={reviews} precision={0.5} readOnly />
          </>
        ) : null}
      </div>
    </Li>
  );
};
