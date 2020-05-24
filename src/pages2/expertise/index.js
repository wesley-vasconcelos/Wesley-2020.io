import React, { useState } from 'react'
import { SubCategory } from './styled'
import ButtonNavbar from '../../components2/button-navbar'
import ChangeStep from './change-step'

const Expertise = () => {
    const [step, setStep] = useState({})
    const steps = [
    {name: 'Documental', step: 'documental'},
    {name: 'Identificação', step: 'identificacao'},
    {name: 'Estetica Externa', step: 'extetica-externa'},
    {name: 'Estrutural', step: 'estrutural'},
    {name: 'Segurança', step: 'seguranca'},
    {name: 'Estetica Interna', step: 'extetica-interna'},
    {name: 'Mecanica e Eletrica', step: 'mecanica-eletrica'}
    ]
    return (
        <>
            <SubCategory>
                {
                    steps.map(i => (
                        <ButtonNavbar 
                            key={i.name}
                            text={i.name} 
                            active={step.name === i.name} 
                            onClick={() => setStep(i)} 
                            subcategory
                        />
                    ) )
                }
            </SubCategory>
            <ChangeStep step={step} />
        </>
    )
}

export default Expertise