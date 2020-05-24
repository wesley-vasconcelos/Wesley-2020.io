import React from 'react'
import Infos from '../../../../components2/Infos'
import { Container } from './styled'

const MecanicaEletrica = () => {
    const array = [
        {name: 'Motor'},
        {name: 'Freio Dianteiro Esquerdo'},
        {name: 'Fumaça Escapamento'},
        {name: 'Freio Traseiro Esquerdo'},
        {name: 'Caixa Direção'},
        {name: 'freio Traseiro Direito'},
        {name: 'Homocinética'},
        {name: 'Freio Dianteiro Direito'},
        {name: 'Embreagem'},
        {name: 'Luzes Painel'},
        {name: 'Caixa de Marchas'},
        {name: 'bateria'},
        {name: 'Òleo'},
        {name: 'Ventilação'},
        {name: 'Arrefecimento'},
        {name: 'Vidro Dianteiro esquerdo'},
        {name: 'Fluido De Freio'},
        {name: 'Vidro Traseiro Esquerdo'},
        {name: 'Fluido De Direção'},
        {name: 'Vidro Traseiro Direito'},
        {name: 'carter Direção'},
        {name: 'Vidro Dianteiro Direito'},
        {name: 'Carter Motor'},
        {name: 'Trava Dianteira Esquerda'},
        {name: 'Carter Cambio '},
        {name: 'Trava Porta Traseira Esquerda'},
        {name: 'Escapamento Coletor'},
        {name: 'Trava Porta Traseira Direita'},
        {name: 'Escapamento Intermediario'},
        {name: 'Trava Porta Dianteira Direita'},
        {name: 'Escapamento Catalizador'},
        {name: 'Desembaçador'},
        {name: 'Escapamento Silencioso'},
        {name: 'Som'},
        {name: 'Tanque Combustivel'},
        {name: 'Comandos Volante'},
        {name: 'Suspenção Dianteira Esquerda'},
        {name: 'Teto Solar/Capota'},
        {name: 'Suspenção Traseira Esquerda'},
        {name: 'Iluminação Interna'},
        {name: 'Suspenção Traseira Direita'},
        {name: 'Suspenção Dianteira Dieita '},
        {name: 'Outro'},
        {name: 'Outro'},


    ]
    return (
        <Container>
        {
            array.map(i => <Infos width="45%" name={i.name}/> )
        }
        </Container>
    )
}

export default MecanicaEletrica