import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IHotel } from '../../contexts/ReservationsContext/types';
import { StyledFormControl } from './style';

interface ISelectItemProps {
  selectLabel: string;
  selectId: string;
  value: string;
  array?: IHotel[] | null;
  types?: ITypes[];
  register: UseFormRegisterReturn<string>;
  onChange: (e: SelectChangeEvent<string>) => void
}

interface ITypes {
  id: number;
  name: string;
}

export const SelectItem = ({
  selectLabel,
  selectId,
  value,
  array,
  types,
  register,
  onChange
}: ISelectItemProps) => {
  return (
    <StyledFormControl fullWidth>
      <InputLabel id={selectId}>{selectLabel}</InputLabel>
      <Select
        labelId={selectId}
        value={value}
        defaultValue={array ? 'allHotels' : ''}
        label={selectLabel}
        {...register}
        onChange={onChange}
      >
        {array && <MenuItem value='allHotels'>Todos os hoteis</MenuItem>}

        {array
          ? array.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))
        : null}


        {types ? types.map(type => <MenuItem key={type.id} value={type.name}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</MenuItem>) :  null}
      </Select>
    </StyledFormControl>
  );
};
