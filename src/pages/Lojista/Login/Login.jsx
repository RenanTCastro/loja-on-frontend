import React from "react";

import Logo from "../../../assets/Logo.svg"

import { 
    LoginContainer,
    LogoImg,
    LoginInput,
    LoginButton,
    Cadastre
} from "./styles";

export default function Login(){
    return(
        <LoginContainer>
            <LogoImg src={Logo}/>
            <LoginInput placeholder="Email" type="email"/>
            <LoginInput placeholder="Senha" type="password"/>
            <LoginButton>Entrar</LoginButton>
            <Cadastre>Não tem uma conta? Cadastre-se</Cadastre>
        </LoginContainer>
    );
}