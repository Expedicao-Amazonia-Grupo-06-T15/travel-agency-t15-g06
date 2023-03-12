import { SyntheticEvent, useCallback, useContext, useState } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';
import { IFilter } from '../../contexts/ReservationsContext/types';
import { DateRange } from 'rsuite/esm/DateRangePicker';
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
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <SelectItem
          selectLabel='Selecionar Hotel'
          array={hotelOptions}
          selectId='selectHotel'
          value={selectedHotel ? selectedHotel : ''}
          register={register('selectHotel')}
          onChange={handleHotelChange}
        />

        {/* <SelectItem
          onChange={activityTypeChange}
          selectId='activityType'
          selectLabel='Tipo de passeio'
          value={selectedActivityType}
          types={activitiesTypesArray}
          register={register('activityType')}
        /> */}
      </div>

      <DateRangePicker
        onChange={(e) => {
          setDates(e);
        }}
      />

      <div>
        <button type='submit'>Buscar</button>
      </div>
    </form>
  );
};
