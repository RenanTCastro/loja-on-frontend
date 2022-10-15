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
    return(
        <DivProductCard>
            <ImageProduct src={defaultProductImage} alt="Imagem do produto"/>
            <ProductName>Cadeira de Madeira Wood Brasileira</ProductName>
            <ProductPrice>R$ 37,99</ProductPrice>
            <AddSacolaButton>{buttonText}</AddSacolaButton>
        </DivProductCard>
    );
}