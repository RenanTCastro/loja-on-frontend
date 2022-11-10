import styled from "styled-components/macro";

export const SeusProdutosContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 20.833vw 0 13.889vw 0;
    @media (min-width: 800px) {
        margin: 25vh 0 20vh 0;
    }
`;

export const SearchAndButtonContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        width: 78vw;
        gap: 0.732vw;
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

    @media (min-width: 800px) {
        height: 3.294vw;
        font-size: 1.171vw;   
        padding-left: 1.464vw;  
        border-radius: 0.366vw;
        border: 0.146vw solid ${props => props.theme.color};
    }
`;


export const SearcIcon = styled.img`
    width: 8.333vw;
    height: 8.333vw;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    gap:6.944vw;
    margin: 5.556vw 0 5.556vw 0;

    @media (min-width: 800px) {
        margin: 0;
        gap: 0.732vw;
    }
`;

export const Button = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 38.889vw;
    height: 12vw;
    font-size: 3.333vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  text-align: center;
    background: ${props => props.theme.color};;
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
    margin-bottom: 4.167vw;

    @media (min-width: 800px) {
        width: 10.981vw;
        height: 3.660vw;
        font-size: 1.025vw;
        border-radius: 0.366vw;
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