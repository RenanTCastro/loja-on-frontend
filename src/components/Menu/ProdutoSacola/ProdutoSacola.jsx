/* eslint-disable no-unused-vars */
import React from "react";

import ImagemProduto from "../../../assets/defaultProductImage.png"
import ApagarIcon from "../../../assets/close.svg"
import useCartContext from "../../../hooks/CartContext";

import { 
    ProdutoSacolaContainer,
    FotoProduto,
    ProdutoNome,
    ProdutoPreco,
    ProdutoInfo,
    ProdutoVariacao,
    Acoes,
    IconeApagar,
    QuantidadeProdutoContainer,
    QuantidadeProduto
} from "./styles";
import { useEffect } from "react";
import { useState } from "react";

export default function ProdutoSacola(){
    const { cartItems, setCartItems } = useCartContext();
    const [cartData, setCartData] = useState([]);

    // useEffect(()=>{
    //     const aux = cartItems.map(()=>{

    //     })
    // },[cartItems])
    return(
        <ProdutoSacolaContainer>
            <FotoProduto src={ImagemProduto} alt="Foto produto"/>
            <ProdutoInfo>
                <ProdutoNome>Cadeira de Madeira Wood Brasileira</ProdutoNome>
                <ProdutoPreco>R$ 37,90</ProdutoPreco>
                <ProdutoVariacao>Tamanho: M</ProdutoVariacao>
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