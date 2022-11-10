
import styled from "styled-components/macro";

export const ConfiguracoesContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 27.778vw 7.5vw 13.889vw 7.5vw;
    @media (min-width: 800px) {
        margin: 20vh 7.5vw 10vh 7.5vw;
    }
`;

export const FotoProduto = styled.img`
    width: 33.333vw;
    height: 33.333vw;

    @media (min-width: 800px) {
        width: 7.321vw;
        height: 7.321vw;
    }
`;

export const ConfiguracoesTexto = styled.p`
    font-size: 4.444vw;
    font-weight: 400;
    color: #019392;
    text-align: center;
    margin: 5.556vw 0 5.556vw 0;
    cursor: pointer;

    @media (min-width: 800px) {
        font-size: 1.186vw;
        margin: 1.853vw;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.098vw;
`;