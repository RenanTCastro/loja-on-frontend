import styled from "styled-components/macro";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 25vw 0 13.889vw 0;
    @media (min-width: 800px) {
        margin: 25vh 0 20vh 0;
    }
`;

export const LojaIcon = styled.img`
    width: 27.778vw;
    height: 27.778vw;
    @media (min-width: 800px) {
        width: 14.826vw;
        height: 14.826vw;
    }
`;

export const Bio = styled.p`
    font-size: 3.889vw;
    color: #019392;
    text-align: center;
    margin: 5.556vw 13.889vw;
    @media (min-width: 800px) {
        margin: 25px;
        font-size: 16px;
    }
`;


export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
    height: 10vw;
    border-radius: 1.389vw;
    border: 0.278vw solid #019392;
    margin-bottom: 5.556vw;
    @media (min-width: 800px) {
        width: 50vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        border: 0.073vw solid ${props => props.theme.color};
    }
`;

export const SearchInput = styled.input`
    width: 68.056vw;
    padding-left: 5.556vw;
    border: none;
    outline: none;
    background: transparent;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    @media (min-width: 800px) {
       font-size: 14px;
       padding-left: 20px;
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