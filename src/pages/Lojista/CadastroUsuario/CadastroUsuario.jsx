import React from "react";

import Logo from "../../../../assets/Logo.svg"

import { 
    CadastroUsuarioContainer,
    LogoImg,
    CadastroUsuarioInput,
    CadastroUsuarioButton,
    Cadastre
} from "./styles";

export default function CadastroUsuario(){
    return(
        <CadastroUsuarioContainer>
            <LogoImg src={Logo}/>
            <CadastroUsuarioInput placeholder="Email" type="email"/>
            <CadastroUsuarioInput placeholder="Senha" type="password"/>
            <CadastroUsuarioInput placeholder="Repetir senha" type="password"/>
            <CadastroUsuarioButton>Próximo</CadastroUsuarioButton>
            <Cadastre>Já tem uma conta? Faça login</Cadastre>
        </CadastroUsuarioContainer>
    );
}