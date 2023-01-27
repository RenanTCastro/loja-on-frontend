import styled from "styled-components/macro";

export const ContainerInputColor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 84vw;
    height: 11.111vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    margin-bottom: 5.556vw;
    padding-right: 1.389vw;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    @media (min-width: 800px) {
        width: 27.2vw;
        height: 3.660vw;
        font-size: 1.025vw;
        border-radius: 0.366vw;
        padding-left: 1.334vw;
        padding-right: 0.4vw;
        margin-bottom: 2vw;
        border: 0.073vw solid ${props => props.theme.color};
    }
`;
export const InputColor = styled.input`
    width: 9.722vw;
    height: 9.722vw;    
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 1.389vw;
    background-color: transparent;

    @media (min-width: 800px) {
        width: 2.8vw;
        height: 2.8vw;
        border: none;
        border-radius: 0.371vw;
        font-size: 1.025vw;
    }

    &::-webkit-color-swatch{
        border: none;
        border-radius: 0.366vw;
    }
`;

export const InputName = styled.p`
    color: black;
    font-size: 12px;
    margin: 0 0 5px 3px;
`;