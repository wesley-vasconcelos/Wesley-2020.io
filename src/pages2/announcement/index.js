import React from 'react'
import Checkbox from '../../components2/checkbox'
import { BoxCheck } from './styled'
import { Checkvery } from './styled'

const Announcement = () => {
    const array = [
        {name: 'Freio ABS'},   
        {name: 'Airbag'},   
        {name: 'Alarme'},
         

    ]
    return(
        <Checkvery>
            {array.map(i => (
                <BoxCheck >
                <Checkbox size="20px" />
            <p>{i.name}</p>
            </BoxCheck>
            ))}
        </Checkvery>
    )
}

export default Announcement