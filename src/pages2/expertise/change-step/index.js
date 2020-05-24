import React from 'react'
import Documental from '../subcategory/documental'
import Identificacao from '../subcategory/identificacao'
import Estrutural from '../subcategory/estrutural'
import ExteticaInterna from '../subcategory/extetica-interna'
import ExteticaExterna from '../subcategory/extetica-externa'
import MecanicaEletrica from '../subcategory/mecanica-eletrica'
import Seguranca from '../subcategory/seguranca'

const ChangeStep = ({step}) => {
    return (
        <>
            { step.step === 'documental' && <Documental/>}
            { step.step === 'identificacao' && <Identificacao/> }
            { step.step === 'extetica-externa' && <ExteticaExterna/> }
            { step.step === 'estrutural' && <Estrutural/> }
            { step.step === 'seguranca' && <Seguranca/> }
            { step.step === 'extetica-interna' && <ExteticaInterna/> }
            { step.step === 'mecanica-eletrica' && <MecanicaEletrica/> }
        </>
    )
} 

export default ChangeStep