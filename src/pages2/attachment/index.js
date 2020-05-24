import React from 'react'
import InputFile from '../../components2/input-file'
import { Container, Boxfile } from './styled'


const Attachment = () => {
    const array = [
        {name: 'Documento  - CRLV'},
        {name: 'Documento - CRV'},
        {name: 'Tela Detran'},
        {name: 'Tela Detran II'},
        {name: 'Laudo Documental'},
        {name: 'IPVA'},
        {name: 'Seguro Obrigatorio'},
        {name: 'Taxa de Licenciamento'},
        {name: 'Autuações'},
        {name: 'Multa/Multa Reaninf'},
        {name: 'Número Chassi'},
        {name: 'Número Motor'},
        {name: 'Etiqueta ETA Plataforma'},
        {name: 'Placa Traseira'},
        {name: 'Vidro'},
        {name: 'Cinto'},
        {name: 'Traseira C/ Placa'},
        {name: 'Foto Traseira Direita'},
        {name: 'Foto Dianteira Esquerda'},
        {name: 'Portas Esquerda Suoerior'},
        {name: 'Portas Esquerda Inferior'},
        {name: 'Portas Direita Superior'},
        {name: 'Portas Direita Inferior'},
        {name: 'Portas Malas Superior'},
        {name: 'Portas Malas Inferior'},
        {name: 'Laudo Via Carro'},
        {name: 'Contrato Anuncio/consignação'},
        {name: 'Vistoria Cautelar Física'},
        {name: 'Contrato Compra e Venda'},
        {name: 'Documento CRV Assinado'},
        {name: 'Comunicação de vendas'},

    ]
    const arraywan = [
        {name: 'Documental'},
        {name: 'Identificação'},
        {name: 'Estética Externa'},
        {name: 'Estética Interna'},
        {name: 'Estrutural'},
        {name: 'Segurança'},
        {name: 'Mecânica / Eletrica'},
        {name: 'Outros Anexos'},
    
    ]
    return (
        <Container>
            <p>Anexos Obrigatorios</p>
            <Boxfile>
                {
            array.map(i => < InputFile width="45%" name={i.name}/> )
             }
        </Boxfile>
        <p>Anexos Complementares</p>
        <Boxfile>
        {
            arraywan.map(i => < InputFile width="45%" name={i.name}/> )
        }
        </Boxfile >
        </Container>
    )
}

export default Attachment