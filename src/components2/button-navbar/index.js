import React from 'react'
import { StyledButton } from './styled'

const ButtonNavbar = ({text, ...rest}) => <StyledButton {...rest}>{text}</StyledButton>

export default ButtonNavbar