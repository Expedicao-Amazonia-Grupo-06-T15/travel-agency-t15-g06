import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';

interface IDates {
  startDate: Date;
  endDate: Date;
  toLocaleDateString: () => string;
}

export const Filter = () => {
  const {
    selectedHotel,
    handleHotelChange,
    hotels,
    activityType,
    activityTypeChange,
  } = useContext(ReservationsContext);

  const { beforeToday } = DateRangePicker;

  const handleDateChange = (dates: IDates[]) => {
    const [startDate, endDate] = dates.map((date) => date.toLocaleDateString());
    console.log(startDate, endDate);
  };

  const { register } = useForm();

  return (
    <form>
      <div>
        <SelectItem
          selectLabel='Selecionar Hotel'
          array={hotels}
          selectId='selectHotel'
          value={selectedHotel}
          register={register('selectHotel')}
          onChange={handleHotelChange}
        />

        <FormControl fullWidth>
          <InputLabel id='activityType'>Tipo de passeio</InputLabel>

          <Select
            labelId='activityType'
            id='activityType'
            label='Tipo de passeio'
            value={activityType}
            onChange={activityTypeChange}
            defaultValue=''
          >
            <MenuItem value='terrena'>Terrena</MenuItem>
            <MenuItem value='aquatica'>Aquática</MenuItem>
          </Select>
        </FormControl>
      </div>
      <DateRangePicker
        disabledDate={beforeToday()}
        onChange={handleDateChange}
        placeholder='Selecione uma data'
      />
      <div>
        <button>Buscar</button>
      </div>
    </form>
  );
};

{
  /* 
<FormControl fullWidth>

          <InputLabel id='selectHotel'>Selecionar Hotel</InputLabel>
          <Select
            labelId='selectHotel'
            label='Selecionar Hotel'
            id='selectHotel'
            value={selectedHotel}
            onChange={handleHotelChange}
            defaultValue=''
          >
            {hotels
              ? hotels.map((hotel) => (
                  <MenuItem value={hotel.name} key={hotel.id}>
                    {hotel.name}
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
*/
}
