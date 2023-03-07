import { Li } from './style';

interface IItemCardProps{
  name: string;
  img: string;
  id: number;
  description: string;
  price?: number;
}

export const ItemCard = ({ name, img, id, description, price }: IItemCardProps) => {
  // colocar reviews, ver com as meninas sobre

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
      </div>
    </Li>
  );
};
