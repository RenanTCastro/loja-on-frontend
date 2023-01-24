import React from "react";

import { 
    DivProductInfo,
    DivProductOptions,
    TextOption,
    DivOption,
    DivProductQuantity,
    DivQuantity,
    DivChangeQuantity,
    DivChangeQuantityText,
    AddSacolaButton,
    DivProductAdd
} from "./styles";

export function ProductInfo(params){

    return(
        <DivProductInfo>
            <TextOption>Tamanho:</TextOption>
            <DivProductOptions>
                <DivOption>Vermelha</DivOption>
                <DivOption>Preta</DivOption>
                <DivOption>Amarela</DivOption>
                <DivOption>Verde</DivOption>
                <DivOption>Azul escuro</DivOption>
            </DivProductOptions>

            <DivProductAdd>
                <DivProductQuantity>
                    <DivQuantity>1</DivQuantity>
                    <DivChangeQuantity>
                        <DivChangeQuantityText>+</DivChangeQuantityText>
                        <DivChangeQuantityText>-</DivChangeQuantityText>
                    </DivChangeQuantity>
                </DivProductQuantity>
                <AddSacolaButton>Adicionar à sacola</AddSacolaButton>
            </DivProductAdd>
        </DivProductInfo>
    );
}