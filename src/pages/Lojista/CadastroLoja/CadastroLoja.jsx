import React from "react";

import Logo from "../../../assets/Logo.svg"

import { 
    CadastroLojaContainer,
    LogoImg,
    CadastroLojaInput,
    CadastroLojaButton,
    Cadastre
} from "./styles";

export default function CadastroLoja(){
    return(
        <CadastroLojaContainer>
            <LogoImg src={Logo}/>
            <CadastroLojaInput placeholder="Nome da loja"/>
            <CadastroLojaInput placeholder="Whatsapp para pedidos"/>
            <CadastroLojaInput type="color"/>
            <CadastroLojaButton>Finalizar</CadastroLojaButton>
            <Cadastre>Já tem uma conta? Faça login</Cadastre>
        </CadastroLojaContainer>
    );
}