import { SyntheticEvent, useCallback, useContext, useState } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';
import { IFilter } from '../../contexts/ReservationsContext/types';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { FilterForm } from './style';
export const Filter = () => {
  const {
    selectedHotel,
    handleHotelChange,
    selectedActivityType,
    activityTypeChange,
    submit,
    hotelOptions,
    setDates,
  } = useContext(ReservationsContext);
  const activitiesTypesArray = [
    {
      id: 1,
      name: 'terrena',
    },
    {
      id: 2,
      name: 'aquatica',
    },
  ];
  const { register, handleSubmit } = useForm<IFilter>();

  return (
    <FilterForm onSubmit={handleSubmit(submit)}>
      <div>
        <SelectItem
          selectLabel='Selecionar Hotel'
          array={hotelOptions}
          selectId='selectHotel'
          value={selectedHotel ? selectedHotel.name : 'Todos os Hoteis'}
          
          register={register('selectHotel')}
          onChange={handleHotelChange}
        />
      </div>

      <DateRangePicker
        // menuAutoWidth={true}
        menuStyle={{
          width: '89%',
          overflow: 'auto',
        }}
        onChange={(e) => {
          setDates(e);
        }}
        placeholder='Selecionar data'
      />

      <div>
        <button type='submit'>Buscar hospedagem</button>
      </div>
    </FilterForm>
  );
};
