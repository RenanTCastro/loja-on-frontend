import React from "react";

import NoImage from "../../assets/noImage.svg";

import { AddIconComponent } from "../AddIconComponent";
import { EditIconComponent } from "../EditIconComponent";

import { 
    DivProductCard, 
    ImageProduct,
    ProductName,
    ProductCardBox,
    PromotionBox,
    OriginalProductPrice,
    ProductPrice,
} from "./styles";

export default function ProductCard(params){
    const buttonText = params.text;
    const isPromotionalProduct = params.promotion && params.promotion;

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

    return(
        <DivProductCard>
            <div style={{display: "flex", flexDirection: "column", height: "100%",justifyContent: "space-between"}}>
                <div>
                    <ImageProduct src={params.info.image ? params.info.image : NoImage} alt="Imagem do produto" onClick={handleClickProduct}/>
                    <ProductName onClick={handleClickProduct}>{params.info.name}</ProductName>
                </div>

                <ProductCardBox>
                    {isPromotionalProduct ?
                        <PromotionBox>
                            <OriginalProductPrice>{params.info.price}</OriginalProductPrice>                
                            <ProductPrice>{params.info.price}</ProductPrice>                
                        </PromotionBox>
                    :
                        <ProductPrice>{params.info.price}</ProductPrice> 
                    } 
                    {
                        buttonText === "EDITAR" ?
                        <EditIconComponent onClick={handleClick}/>:          
                        <AddIconComponent onClick={handleClick}/>
                    }
                </ProductCardBox>
            </div>
        </DivProductCard>
    );
}