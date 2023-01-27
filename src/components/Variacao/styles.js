import styled from "styled-components/macro";

export const Input = styled.input`
    width: 45vw;
    height: 11.111vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    outline: none;
    margin-bottom: 14px;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
    @media (min-width: 800px) {
        width: 27.818vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        border: 0.073vw solid ${props => props.theme.color};
        font-size: 1.025vw;
        margin-bottom: 1.464vw;
        padding-left: 1.098vw;
    }
`;

export const InputQuantity = styled.input`
    width: 18vw;
    height: 11.111vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    outline: none;
    margin-bottom: 14px;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
    @media (min-width: 800px) {
        width: 27.818vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        border: 0.073vw solid ${props => props.theme.color};
        font-size: 1.025vw;
        margin-bottom: 1.464vw;
        padding-left: 1.098vw;
    }
`;

export const AddContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.p`
    color: black;
    font-size: 14px;
    margin: 0 0 5px 3px;
`;

export const TextOptions = styled.p`
    color: black;
    font-size: 12px;
    margin: 0 0 5px 3px;
`;

