import React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledNavbar } from './styled'
import ButtonNavbar from '../button-navbar'

const Navbar = ({routes}) => {
    const history = useHistory()
    const navigate = path => history.push(path)
    return (
      <>
        <h3>Cadastro de Veículo</h3>
        <StyledNavbar>
          {routes.map(i => (
            <ButtonNavbar 
              key={i.path}
              active={history.location.pathname === i.path}
              text={i.name}
              textWhite={i.name === 'Entrega'}
              onClick={() => navigate(i.path)}
            />
          ))}
        </StyledNavbar>
      </>
    )
}

export default Navbar