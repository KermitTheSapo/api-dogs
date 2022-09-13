import styled, {createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 60%;
`