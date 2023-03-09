import { SyntheticEvent, useCallback, useContext, useState } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { Controller, useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';
import { IFilter } from '../../contexts/ReservationsContext/types';
import { DateRange } from 'rsuite/esm/DateRangePicker';

export const Filter = () => {
  const {
    selectedHotel,
    handleHotelChange,
    hotels,
    activityType,
    activityTypeChange,
    setHotels,
    getAllHotels,
    submit
  } = useContext(ReservationsContext);

  const activitiesTypesArray = [
    {
      id: 1,
      name: 'terrena'
    },
    {
      id: 2,
      name: 'aquatica'
    }
  ];

  const [dates, setDates] = useState<DateRange | null>(null);

  const { register, handleSubmit, control } = useForm<IFilter>();

  const dataPickerChange = (data: DateRange | null) => { // corrigir type
    setDates(data);
    console.log(data);

    if(data === null){
      getAllHotels();
      console.log('ficou null');
    };
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <SelectItem
          selectLabel='Selecionar Hotel'
          array={hotels}
          selectId='selectHotel'
          value={selectedHotel}
          register={register('selectHotel')}
          onChange={handleHotelChange}
        />

        <SelectItem 
          onChange={activityTypeChange}
          selectId='activityType'
          selectLabel='Tipo de passeio'
          value={activityType}
          types={activitiesTypesArray}
          register={register('activityType')}
        />

      </div>

      <Controller
            name="dates"
            control={control}
            render={({ field }) => (
              <DateRangePicker {...field}/> // pq quando o onChange eh colocado, o react hook form para de funcionar pra esse componente?
            )}
      />

      

      <div>
        <button type='submit'>Buscar</button>
      </div>
    </form>
  );
};
