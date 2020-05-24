import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 150px;
    text-align: center;
`

export const Span = styled.span`
 position: relative;
  z-index: 0;
  display: inline-block;
  width: 100%;
  background: #00bfff;
  cursor: pointer;
  color: #fff;
  padding: 10px 0;
  text-transform:uppercase;
  font-size:12px;
  `

export const StyledInput = styled.input`
     display: inline-block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`

export const Adjust = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2%;
    width: 50%;
`

export const Colum = styled.div`
    display: flex;
    flex-direction: column;
`

export const Around = styled.div`
    display: flex;
    justify-content: space-around;
`
