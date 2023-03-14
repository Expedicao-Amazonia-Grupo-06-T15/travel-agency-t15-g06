import { Rating, Typography } from '@mui/material';
import {
  CardsInfos,
  Description,
  Li,
  LiImageContainer,
  Price,
  ReviewsContainer,
} from './style';
import plusIcons from '../../assets/images/plus.svg';

interface IItemCardProps {
  name: string;
  img: string;
  id: number;
  description: string;
  price?: number;
  reviews?: number;
  showFacilities?: boolean;
  showPrice?: boolean;
}

export const ItemCard = ({
  name,
  img,
  description,
  price,
  reviews,
  showFacilities = false,
  showPrice = false,
}: IItemCardProps) => {
  return (
    <Li>
      <LiImageContainer>
        <img src={img} alt={name} />
      </LiImageContainer>
      <CardsInfos>
        <h6>{name}</h6>
        {showFacilities && <img src={plusIcons} alt='Facilidades' />}
        <Description>{description}</Description>
        {showPrice && <Price>R$ {price}/noite</Price>}
        {reviews ? (
          <ReviewsContainer>
            <Rating name='reviews' value={reviews} precision={0.5} readOnly />
            <Typography component='legend'>Reviews</Typography>
          </ReviewsContainer>
        ) : null}
      </CardsInfos>
    </Li>
  );
};
