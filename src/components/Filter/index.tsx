import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { Controller, useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';

export interface IDates {
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

  const submit = (data: any) => {
    console.log(data);
  };

  const { register, handleSubmit, control } = useForm();

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
              <DateRangePicker {...field} />
            )}
          />

      <div>
        <button type='submit'>Buscar</button>
      </div>
    </form>
  );
};
