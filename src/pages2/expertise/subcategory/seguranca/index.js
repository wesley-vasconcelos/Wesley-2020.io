import React from 'react'
import Infos from '../../../../components2/Infos'
import { Container } from './styled'

const Seguranca = () => {
    const array = [
        {name: 'Luz de Posição Dianteira Esquerda'},
        {name: 'pneu Traseiro Esquerdo'},
        {name: 'Luz de Posição Dianteira Direita'},
        {name: 'Pneu Traseiro Direito'},
        {name: 'Farol Baixo Esquerdo'},
        {name: 'Pneu Dianteiro Direito'},
        {name: 'Farol Baixo Direito'},
        {name: 'Estepe'},
        {name: 'Farol Alto Esquerdo'},
        {name: 'Macaco'},
        {name: 'Farol Alto Direito'},
        {name: 'Trângulo'},
        {name: 'Farol Neblina Esquerdo'},
        {name: 'Chave de Roda'},
        {name: 'Farol Neblina Direito'},
        {name: 'Buzina'},
        {name: 'Seta Dianteira Esquerda'},
        {name: 'Limpador Para-Brisas'},
        {name: 'Seta Dianteira Direita'},
        {name: 'Esquicho Limpador Para-Brisas'},
        {name: 'Luz de posição Traseira Esquerda'},
        {name: 'Limpador Traseiro'},
        {name: 'Luz Posição Traseira Direita'},
        {name: 'Esguicho Limpador Traseiro'},
        {name: 'Luz da Placa Direita'},
        {name: 'Para Sol Direito'},
        {name: 'Luz de Freio Esquerda'},
        {name: 'Cinto Dianteiro Esquerdo'},
        {name: 'Luz de Freio Central'},
        {name: 'Cinto Traseiro Esquerdo'},
        {name: 'Luz de Freio Direita'},
        {name: 'Cinto Traseiro Central'},
        {name: 'Luz Ré Esquerda'},
        {name: 'Cinto Traseiro Direito'},
        {name: 'Luz Ré Direita'},
        {name: 'Cinto Dianteiro Direito'},
        {name: 'Seta Traseira Esquerda '},
        {name: 'Retrovisor Esquerdo'},
        {name: 'Seta Traseira Direita'},
        {name: 'Retrovisor Central'},
        {name: 'Outras Luzes '},
        {name: 'Retrovisor Direito'},
        {name: 'Pneu Dianteiro Esquerdo'},
        {name: 'Outros'},
    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name}/> )
        }
        </Container>
    )
}

export default Seguranca