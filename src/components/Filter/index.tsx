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
    activityType,
    activityTypeChange,
    setHotels,
    submit,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    hotelOptions,
=======
    hotelOptions
>>>>>>> Stashed changes
=======
    hotelOptions,
>>>>>>> Stashed changes
  } = useContext(ReservationsContext);

  const activitiesTypesArray = [
    {
      id: 1,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      name: 'terrena',
    },
    {
      id: 2,
      name: 'aquatica',
    },
=======
      name: 'terrena'
    },
    {
      id: 2,
      name: 'aquatica'
    }
>>>>>>> Stashed changes
=======
      name: 'terrena',
    },
    {
      id: 2,
      name: 'aquatica',
    },
>>>>>>> Stashed changes
  ];

  const [dates, setDates] = useState<DateRange | null>(null);

  const { register, handleSubmit, control } = useForm<IFilter>();

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const dataPickerChange = (data: [Date, Date] | null) => {
    // corrigir type
    setDates(data);
    // console.log(data);

    if (data === null) {
      setHotels(hotelOptions);
    }
=======
  const dataPickerChange = (data: [Date, Date] | null) => { // corrigir type
=======
  const dataPickerChange = (data: [Date, Date] | null) => {
    // corrigir type
>>>>>>> Stashed changes
    setDates(data);
    // console.log(data);

    if (data === null) {
      setHotels(hotelOptions);
<<<<<<< Updated upstream
    };
>>>>>>> Stashed changes
=======
    }
>>>>>>> Stashed changes
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <SelectItem
          selectLabel='Selecionar Hotel'
          array={hotelOptions}
          selectId='selectHotel'
          value={selectedHotel}
          register={register('selectHotel')}
          onChange={handleHotelChange}
        />

<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <SelectItem
=======
        <SelectItem 
>>>>>>> Stashed changes
=======
        <SelectItem
>>>>>>> Stashed changes
          onChange={activityTypeChange}
          selectId='activityType'
          selectLabel='Tipo de passeio'
          value={activityType}
          types={activitiesTypesArray}
          register={register('activityType')}
        />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      </div>

      <Controller
        name='dates'
        control={control}
        render={({ field }) => (
          <DateRangePicker {...field} onChange={(e) => console.log(e)} /> // pq quando o onChange eh colocado, o react hook form para de funcionar pra esse componente?
        )}
      />

=======

=======
>>>>>>> Stashed changes
      </div>

      <Controller
        name='dates'
        control={control}
        render={({ field }) => (
          <DateRangePicker {...field} onChange={(e) => console.log(e)} /> // pq quando o onChange eh colocado, o react hook form para de funcionar pra esse componente?
        )}
      />

<<<<<<< Updated upstream
      

>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <div>
        <button type='submit'>Buscar</button>
      </div>
    </form>
  );
};
