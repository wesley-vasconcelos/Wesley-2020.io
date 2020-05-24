import React, { useState } from 'react'
import { Wrapper, Span, StyledInput,  Adjust, Colum, Around } from './style'

const InputFile = ({name, ...rest}) => {
    const [stateRef, setStateRef] = useState('')
    const [namee, setNamee] = useState('')
    
    return (
        <Adjust>
           <Colum >
            <p>{name}</p>
           < Around><p>{namee || 'no file selected'}</p>
            <Wrapper>
                <Span>Upload File</Span>
                <StyledInput ref={setStateRef} onChange={() => setNamee(stateRef.files[0].namee)} type="file" />
            </Wrapper>
            </Around> 
            </Colum>
        </ Adjust>
    )
}

export default InputFile