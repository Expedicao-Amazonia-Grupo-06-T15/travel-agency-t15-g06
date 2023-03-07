import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';


export const Filter = () => {
  const { selectedHotel, handleHotelChange, hotels, activityType, activityTypeChange } =
    useContext(ReservationsContext);
  
    const {beforeToday} = DateRangePicker;

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  const handleDateChange = (dates) => {
    console.log(dates)
  }

  return (
    <form>
      <div>
        <FormControl fullWidth>
          {' '}
          {/* Filtro aqui  */}
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
        <DateRangePicker disabledDate={beforeToday()} onChange={handleDateChange} placeholder='Selecione uma data' />
      <div>
        <button>Buscar</button>
      </div>
    </form>
  );
};
