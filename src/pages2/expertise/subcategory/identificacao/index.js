import React from 'react'
import Infos from '../../../../components2/Infos'
import InputFile from '../../../../components2/input-file'
import { Container } from './styled'
import { Boxfile } from './styled'


const Identificacao = () => {
    const array = [
        { name: 'Nº Chassi', thirtInput: true },
        { name: 'Vidro Dianteiro Esquerdo' },
        { name: 'Nº Motor', thirtInput: true },
        { name: 'Vidro traseiro Esquerdo' },
        { name: 'Etiqueta ETA   motor' },
        { name: 'Vidro Traseiro' },
        { name: 'Etiqueta Plataforma' },
        { name: 'Vidro Traseiro Direito' },
        { name: 'Etiqueta Plataforma' },
        { name: 'Etiqueta ETA Plataforma' },
        { name: 'Vidro Dianteiro Direito' },
        { name: 'Placa Dianteira' },
        { name: 'Cinto Esquerdo' },
        { name: 'Placa Traseira' },
        { name: 'Cinto Direito' },
        { name: 'Vidro Para-Brisas' },
        { name: 'Outros' },

    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name} thirtInput={i.thirtInput} /> )
        }
        <Boxfile>
            <InputFile />
            <InputFile />
            <InputFile />
        </Boxfile>
        </Container>
    )
}

export default Identificacao