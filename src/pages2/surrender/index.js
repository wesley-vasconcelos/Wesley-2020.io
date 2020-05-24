import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField } from '@material-ui/core';


const Surrender = () => {
    return (
        <div>
        <p>Divergencia no Histório</p>
        <FormControl component="fieldset">
      <FormLabel component="legend">sim</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      <FormLabel component="legend">Não</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
    <TextField
    maxlength='100' 
    />
    </div>
    )
}

export default Surrender