import React from 'react'
import Infos from '../../../../components2/Infos'
import { Container } from './styled'

const ExteticaInterna = () => {
    const array = [
        {name: 'Painel'},
        {name: 'Carpete Traseiro Esquerdo'},
        {name: 'Volante'},
        {name: 'Carpete Traseiro Direito'},
        {name: 'Manopla Câmbio'},
        {name: 'Carpete Dianteiro Direito'},
        {name: 'Pedaleiras'},
        {name: 'Banco Dianteiro Esquerdo'},
        {name: 'Forro Porta Dianteira Esquerda'},
        {name: 'Banco Traseiro Esquerdo'},
        {name: 'Forro Porta Traseira Esquerda'},
        {name: 'Banco Traseiro Direito'},
        {name: 'Forro Porta Traseira Direita'},
        {name: 'Banco Dianteiro Direito'},
        {name: 'Forro Porta Dianteira Direita'},
        {name: 'Forro teto'},
        {name: 'Borracha Porta Dianteira Esquerda'},
        {name: 'Forração Porta Malas'},
        {name: 'Borracha porta Traseira Esquerda'},
        {name: 'Acabamento Porta Malas'},
        {name: 'Borracha Porta Traseira Direita'},
        {name: 'Tampa Bagagito Porta Malas'},
        {name: 'Borracha Porta Malas '},
        {name: 'Acabamento Coluna B Esquerda'},
        {name: 'Soleira Dianteira Esquerda'},
        {name: 'Acabamento Coluna C Esquerda'},
        {name: 'Soleira Traseira Esquerda'},
        {name: 'Acabamento Coluna C Direita'},
        {name: 'Soleira  Traseira Direita'},
        {name: 'Acabamento Coluna B Direita'},
        {name: 'Soleira Dianteira Direita'},
        {name: 'Abamento Coluna A direita'},
        {name: 'Carpete Dianteiro Esquerdo'},
        {name: 'outros'},

    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name}/> )
        }
        </Container>
    )
}

export default ExteticaInterna