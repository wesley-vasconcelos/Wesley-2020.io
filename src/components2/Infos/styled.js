import styled, { css } from 'styled-components'

export const BoxInfo = styled.div`
    ${({width}) => width && css`
        width: ${width}
    `}
`