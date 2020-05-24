import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputFile from '../input-file';
import { BoxInfo } from './styled';


const Infos = ({name, thirtInput, ...rest}) => {
    
   
      return (
        <BoxInfo {...rest}>
            <p>{name}</p>
            <TextField
            id="outlined-margin-none"
            variant="outlined"
            style={{width:'30%', paddingLeft:' 2%'}}
            />
            <TextField
            id="outlined-margin-none"
            variant="outlined"
            style={{width:'30%',  paddingLeft:' 2%'}}
            />  
            { thirtInput && 
                <TextField
                id="outlined-margin-none"
                variant="outlined"
                style={{width:'30%',  paddingLeft:' 2%'}}
                />
            }
            <InputFile/>
        </BoxInfo>
    )

}

export default Infos