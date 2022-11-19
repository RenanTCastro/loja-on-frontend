import styled from "styled-components/macro";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 20vw 0 13.889vw 0;
    @media (min-width: 800px) {
        margin: 20vh 0 20vh 0;
    }
`;

export const LojaIcon = styled.img`
    width: 27.778vw;
    height: 27.778vw;
    border-radius: 50%;

    @media (min-width: 800px) {
        width: 10vw;
        height: 10vw;
    }
`;

export const Bio = styled.p`
    font-size: 3.889vw;
    color: ${props => props.theme.color};
    text-align: center;
    margin: 5.556vw 13.889vw;
    @media (min-width: 800px) {
        margin: 25px;
        font-size: 16px;
    }
`;

export const SearchInput = styled.input`
    width: 79vw;
    height: 10vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    padding-left: 5.556vw;
    outline: none;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin-bottom: 5.556vw;

    @media (min-width: 800px) {
        width: 77vw;
        height: 3.294vw;
        font-size: 1.171vw;   
        padding-left: 1.464vw;  
        border-radius: 0.366vw;
        border: 0.146vw solid ${props => props.theme.color};
        margin-bottom: 3.706vw;
    }
`;

export const SearcIcon = styled.img`
    width: 8.333vw;
    height: 8.333vw;
    cursor: pointer;
    @media (min-width: 800px) {
        display: none;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 7.222vw;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 3.660vw;
    }
`;