import React from 'react'
import Infos from '../../../../components2/Infos'
import { Container } from './styled'

const Estrutural = () => {
    const array = [
        {name: 'Alma Para-Choque'},
        {name: 'Coluna C Direita'},
        {name: 'Longarina Inferior Dianteira Esquerda'},
        {name: 'Coluna B Direita'},
        {name: 'Longarina Inferior Traseira Esquerda'},
        {name: 'Coluna A Direita'},
        {name: 'Longarina Inferior Traseira Direita'},
        {name: 'Caixa de Ar Esquerda'},
        {name: 'Longarina Inferior Dianteira Direita'},
        {name: 'Caixa de Ar Direita'},
        {name: 'Longarina  Superior Direita'},
        {name: 'Longarina Central Esquerda'},
        {name: 'longarina Superior Direita'},
        {name: 'Longarina Central Direita'},
        {name: 'Caixa de Roda Dianteira Esqueda'},
        {name: 'Assoalho Esquerdo'},
        {name: 'Caixa de roda traseira Esquerda'},
        {name: 'Assoalho Direito'},
        {name: 'Caixa de Roda Traseira Direita'},
        {name: 'Caixa de Estepe'},
        {name: 'Caixa de Roda Dianteira Direita'},
        {name: 'Painel Traseiro'},
        {name: 'Painel Corta Fogo'},
        {name: 'Outro'},
        {name: 'Coluna A Esquerda'},
        {name: 'Coluna B Esquerda'},
        {name: 'Coluna C Esquerda'},
        {name: 'Folha Teto'},


    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name}/> )
        }
        </Container>
    )
}

export default Estrutural