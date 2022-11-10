import React from "react";

import defaultProductImage from "../../assets/defaultProductImage.png";

import { 
    DivProductCard, 
    ImageProduct,
    ProductName,
    ProductPrice,
    AddSacolaButton
} from "./styles";

export default function ProductCard(params){
    const buttonText = params.text;

    const handleClick = ()=>{
        buttonText === 'EDITAR'
        ? window.location = `/gerenciarproduto/?id=${params.info.product_id}` 
        : console.log("add")
    }

    const handleClickProduct = ()=>{
        buttonText === 'EDITAR'
        ? console.log()
        : window.location = `/produto/?id=${params.info.product_id}` 
    }

    console.log(window.screen)
    return(
        <DivProductCard>
            <ImageProduct src={defaultProductImage} alt="Imagem do produto" onClick={handleClickProduct}/>
            <ProductName onClick={handleClickProduct}>{params.info.name}</ProductName>
            <ProductPrice>R$ {params.info.price}</ProductPrice>
            <AddSacolaButton onClick={handleClick}>{buttonText}</AddSacolaButton>
        </DivProductCard>
    );
}