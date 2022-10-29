import styled from "styled-components/macro";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin: 20.833vw 7.5vw 13.889vw 0;
`;


export const ProductName = styled.p`
    font-size: 5vw;
    width: 55.55vw;
    margin: 0;
    margin-left: 7.5vw;
`;

export const ProductPrice = styled.p`
    font-size: 5vw;
    font-weight: 600;
    margin: 1.38vw 0 0 7.5vw ;
`;

export const ProductImage = styled.img`
    width: 85vw;
    height: 85vw;
    margin: 4.167vw 0 4.167vw 7.5vw;
`;

export const AddSacolaButton = styled.button`
    width: 85vw;
    height: 11.111vw;
    font-size: 3.889vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  text-align: center;
    background: #019392;
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
    margin-left: 7.5vw;
`;

export const ProductDescription= styled.p`
    font-size: 3.333vw;
    text-align: center;
    margin: 5.556vw 0 11.111vw 7.5vw;
`;


export const OtherProducts = styled.div`
    display: flex;
    gap: 5.556vw;
    overflow-x: scroll;
    padding: 0.833vw 0.833vw 5.556vw 0.833vw;
    margin-top: 5.556vw;
    margin-left: 7.5vw;
`;