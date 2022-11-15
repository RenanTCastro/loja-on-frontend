import styled from "styled-components/macro";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin: 20.833vw 7.5vw 13.889vw 0;
    @media (min-width: 800px) {
        margin: 25vh 0 10vh 0;
    }
`;

export const ProductInfoContainer = styled.div`
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        align-self: baseline;
        margin-left: 7.5vw;
        margin-bottom: 2.965vw;
    }
`;

export const ProductName = styled.p`
    font-size: 5vw;
    width: 55.55vw;
    margin: 0;
    margin-left: 7.5vw;
    @media (min-width: 800px) {
        font-size: 2.076vw;
        width: 37.064vw;
        margin-left: 2.965vw;
    }
`;

export const ProductPrice = styled.p`
    font-size: 5vw;
    font-weight: 600;
    margin: 1.38vw 0 0 7.5vw ;
    @media (min-width: 800px) {
        font-size: 1.631vw;
        margin: 0.741vw 0 1.483vw 2.965vw;
    }
`;

export const ProductImage = styled.img`
    width: 85vw;
    height: 85vw;
    margin: 4.167vw 0 4.167vw 7.5vw;
    @media (min-width: 800px) {
        width: 39.288vw;
        height: 39.288vw;
        margin: 0;
    }
`;

export const AddSacolaButton = styled.button`
    width: 85vw;
    height: 11.111vw;
    font-size: 3.889vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  text-align: center;
    background: ${props => props.theme.color};
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
    margin-left: 7.5vw;
    @media (min-width: 800px) {
        width: 37.064vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        font-size: 1.171vw;
        margin-bottom: 0;
        margin-left: 2.965vw;
    }
`;

export const ProductDescription= styled.p`
    font-size: 3.333vw;
    text-align: center;
    margin: 5.556vw 0 11.111vw 7.5vw;
    @media (min-width: 800px) {
        font-size: 1.334vw;
        width: 37.064vw;
        margin: 1.112vw 0 1.483vw 2.965vw;
        text-align: start;
    }
`;

export const OtherProductsLabel = styled.p`
    font-size: 5vw;
    width: 55.55vw;
    margin: 0;
    margin-left: 7.5vw;
    @media (min-width: 800px) {
        font-size: 2.076vw;
        width: auto;
    }
`;

export const OtherProducts = styled.div`
    display: flex;
    gap: 5.556vw;
    overflow-x: scroll;
    padding: 0.833vw 0.833vw 5.556vw 0.833vw;
    margin-top: 5.556vw;
    margin-left: 7.5vw;
    @media (min-width: 800px) {
        margin-top: 1.483vw;
        gap: 3.706vw;
        margin-left: 6.667vw;
        overflow-x: hidden;
    }
`;