import React from 'react'
import Infos from '../../../../components2/Infos'
import { Container } from './styled'

const ExteticaExterna = () => {
    const array = [
        {name: 'Farol Direito'},
        {name: 'Lateral Traseira Direita'},
        {name: 'Farol Esquerdo'},
        {name: 'Teto'},
        {name: 'Farol Neblina Direito'},
        {name: 'Tampa Traseira'},
        {name: 'Farol neblina Esquerdo'},
        {name: 'Vidro Para Brisas'},
        {name: 'capô'},
        {name: 'Vidro Dianteiro Esquerdo'},
        {name: 'Para Choque-Dianteio'},
        {name: 'Vidro Traseiro Esquerdo'},
        {name: 'Para Choque-traseiro'},
        {name: 'Vidro Traseiro'},
        {name: 'Paralama Dianteiro Esquerdo '},
        {name: 'Vidro Traseiro Direito'},
        {name: 'Paralama Dianteiro Direito'},
        {name: 'Vidro Dianteiro Direito'},
        {name: 'Retrovisor Esquerdo'},
        {name: 'Roda Dianteira  Esquerda  '},
        {name: 'Retrovisor Direito'},
        {name: 'Roda Traseira  Esquerda'},
        {name: 'Porta Dianteira Esquerda '},
        {name: 'Roda  Traseira Esquerda'},
        {name: 'porta Traseira Esquerda'},
        {name: 'Roda Dianteira Direita'},
        {name: 'Porta Traseira Direita'},
        {name: 'Lanterna Esquerda'},
        {name: 'Porta Dianteira Direita'},
        {name: 'Lanterna Direita'},
        {name: 'Lanterna Traseira Esquerda'},
        {name: 'Outro'}

    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name}/> )
        }
        </Container>
    )
}

export default ExteticaExterna