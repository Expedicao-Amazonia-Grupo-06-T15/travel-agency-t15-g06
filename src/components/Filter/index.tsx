import { useContext } from 'react';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SelectItem } from '../SelectItem';
import { api } from '../../services/api';

interface IFilter {
  selectHotel: string;
  activityType: string;
  dates: Date[];
}

interface IDates {
  startDate: string;
  endDate: string;
}

interface IReservetions {
  id: number;
  userId: number;
  hotelId: number;
  dates: IDates;
}

export const Filter = () => {
  const {
    selectedHotel,
    handleHotelChange,
    hotels,
    activityType,
    activityTypeChange,
    setHotels,
    getAllHotels
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

  const reservedHotelsByDate = (date1Start: string, date1End: string, date2Start: string, date2End: string) => {

    const start1 = new Date(date1Start);
    const end1 = new Date(date1End);
    const start2 = new Date(date2Start);
    const end2 = new Date(date2End);

   
    return (start1 < end2) && (start2 < end1);
    
  };

  const submit: SubmitHandler<IFilter> = async (data: IFilter)  => {

    const {selectHotel, activityType, dates} = data;

    console.log(data);

    const token = localStorage.getItem('@TOKEN');

    if(dates && selectHotel === ''){
      try {
        const reservedHotels = await api.get<IReservetions[]>('/reservedHotels', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const formatedDates = dates.map(date => date.toLocaleDateString());

        const unavailableHotelsById = reservedHotels.data.map(reservation => {

          const reservedDates = Object.values(reservation.dates);

         if(reservedHotelsByDate(formatedDates[0], formatedDates[1], reservedDates[0], reservedDates[1])){
          return reservation.hotelId;
         }
        });

        if(unavailableHotelsById.length > 0){
          const filteredHotels = hotels?.filter(hotel => !unavailableHotelsById.includes(hotel.id));
          setHotels([...filteredHotels]); //  ver esse erro depois;
        }
      


      } catch (error) {
        console.log(error);
      }
    }

  };

  const { register, handleSubmit, control } = useForm<IFilter>();

  const dataPickerChange = (data: any) => { // corrigir type
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
              <DateRangePicker {...field} /> // pq quando o onChange eh colocado, o react hook form para de funcionar pra esse componente?
            )}
      />

      <div>
        <button type='submit'>Buscar</button>
      </div>
    </form>
  );
};
