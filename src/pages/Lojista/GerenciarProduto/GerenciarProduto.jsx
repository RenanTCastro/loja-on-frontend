import React from "react";

import Foto from "../../../assets/defaultProductImage.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    GerenciarProdutoContainer,
    GerenciarProdutoTexto,
    FotoProduto
} from "./styles";

export default function GerenciarProduto(){
    return(
        <GerenciarProdutoContainer>

            <FotoProduto src={Foto}/>
            <GerenciarProdutoTexto>
                Alterar foto do produto
            </GerenciarProdutoTexto>
            
            <div style={{marginBottom: "2.778vw"}}>
                <InputLojaOn placeholder="Nome do produto"/>
                <InputLojaOn placeholder="Preço"/>
                <TextAreaLojaOn rows="5" placeholder="Descrição do produto" />
                <InputLojaOn placeholder="Código do produto"/>
            </div>
            
            <ButtonLojaOn name="Salvar alterações" colorType="confirmar"/>
            <ButtonLojaOn name="Voltar"/>
            <ButtonLojaOn name="Apagar produto" colorType="apagar"/>

        </GerenciarProdutoContainer>
    );
}