import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    width: 15%;
    background-color: #C4C4C4;
    border: none;
    padding: .7em 0;
    outline: none;
    cursor: pointer;
    ${({active}) => active && css`
        background-color: #26A8F1;
    `}
    ${({textWhite}) => textWhite && css`
        color: #fff;
    `}
    ${({subcategory}) => subcategory && css`
        width: 13%;
    `}
`