import styled from "styled-components/macro";

export const ProdutoSacolaContainer = styled.div`
    display: flex ;
    width: 58.333vw;
    background: #F8F8F8;
    margin-bottom: 3.333vw;
    padding: 2.778vw;
`;

export const FotoProduto = styled.img`
    width: 22.222vw;
    height: 22.222vw;
`;

export const ProdutoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProdutoNome = styled.p`
    font-size: 3.333vw;
    color: #019392;
    text-align: start;
    margin-left: 4.167vw;
    margin-top: 0;
`;

export const ProdutoPreco = styled.p`
    font-size: 3.333vw;
    color: #019392;
    text-align: start;
    font-weight: 600;
    margin-left: 4.167vw;
    margin-bottom: 0;
`;

export const IconeApagar = styled.img`
    width: 2.778vw;
    height: 2.778vw;
    cursor: pointer;
`;

export const Acoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

export const QuantidadeProdutoContainer = styled.div`
    display: flex;
    gap: 5px;
`;

export const QuantidadeProduto = styled.p`
    font-size: 3.333vw;
    color: #019392;
    text-align: start;
    margin-bottom: 0;
`;