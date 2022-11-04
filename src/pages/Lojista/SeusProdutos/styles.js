import styled from "styled-components/macro";

export const SeusProdutosContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 20.833vw 0 13.889vw 0;
`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
    height: 10vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};;
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
`;


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 7.222vw;
`;