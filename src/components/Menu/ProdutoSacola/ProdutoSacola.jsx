import React, { useState } from "react";

import ImagemProduto from "../../../assets/defaultProductImage.png"
import ApagarIcon from "../../../assets/close.svg"

import { 
    ProdutoSacolaContainer,
    FotoProduto,
    ProdutoNome,
    ProdutoPreco,
    ProdutoInfo,
    Acoes,
    IconeApagar,
    QuantidadeProdutoContainer,
    QuantidadeProduto
} from "./styles";

export default function ProdutoSacola(){

    return(
        <ProdutoSacolaContainer>
            <FotoProduto src={ImagemProduto} alt="Foto produto"/>
            <ProdutoInfo>
                <ProdutoNome>Cadeira de Madeira Wood Brasileira</ProdutoNome>
                <ProdutoPreco>R$ 37,90</ProdutoPreco>
            </ProdutoInfo>
            <Acoes>
                <IconeApagar src={ApagarIcon} alt="Foto produto"/>
                <QuantidadeProdutoContainer>
                    <QuantidadeProduto>+</QuantidadeProduto>
                    <QuantidadeProduto>1</QuantidadeProduto>
                    <QuantidadeProduto>-</QuantidadeProduto>
                </QuantidadeProdutoContainer>
            </Acoes>
        </ProdutoSacolaContainer>
    );
}