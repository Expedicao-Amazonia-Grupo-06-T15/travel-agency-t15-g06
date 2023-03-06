import { FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { AxiosResponse } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IHotel {
  address: string;
  id: number;
  img: string;
  name: string;
  price: number;
  reviews: number | null;
  rooms: number;
}

const ExplorePage = () => {

  const [selectedHotel, setSelectedHotel] = useState('');
  const [activityType, setActivityType] = useState('');

  const [hotels, setHotels] = useState<IHotel[] | null>(null);

  const handleHotelChange = (e: SelectChangeEvent): void => {
    setSelectedHotel(e.target.value);
  };

  const activityTypeChange = (e: SelectChangeEvent): void => {
    setActivityType(e.target.value);
  };

  useEffect(() => {

    const getAllHotels = async (): Promise<void> => {
      const response = await api.get<IHotel[]>('hotels');
      console.log(response.data);
      setHotels(response.data);
    };

    getAllHotels();

  }, []);

  return (
    <main>
      <div>Imagem das folhas aqui</div>
      <form>
        <div>
          <FormControl fullWidth> {/* Filtro aqui  */}
            <InputLabel id="selectHotel">Selecionar Hotel</InputLabel>

            <Select labelId="selectHotel" label="Selecionar Hotel" id='selectHotel' value={selectedHotel} onChange={handleHotelChange}>

              {hotels ? hotels.map(hotel => <MenuItem value={hotel.name} key={hotel.id}>{hotel.name}</MenuItem>) : null}

            </Select>
          </FormControl>

          <FormControl fullWidth>
            
            <InputLabel id='activityType'>Tipo de passeio</InputLabel>

            <Select labelId='activityType' id='activityType' label='Tipo de passeio' value={activityType} onChange={activityTypeChange}>

            </Select>
          </FormControl>
        </div>
        

        

        <div>
          <button>Buscar</button>
        </div>

      </form>
      
    </main>
  );
};

export default ExplorePage;
