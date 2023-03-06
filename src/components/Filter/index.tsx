import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const Filter = () => {

  return (
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
  )
}