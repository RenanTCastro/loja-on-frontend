import React, { useState } from "react";
import Cookies from 'js-cookie'

import Logo from "../../../assets/Logo.svg"
import { InputLojaOn } from "../../../components";

import { 
    CadastroUsuarioContainer,
    LogoImg,
    CadastroUsuarioInput,
    CadastroUsuarioButton,
    Cadastre
} from "./styles";

export default function CadastroUsuario(){
    const [userData, setUserData] = useState({});

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleClick = () =>{
        // Verificar se senhas coincidem e se e-mail é válido
        Cookies.set("email", userData.email)
        Cookies.set("password", userData.password)
        window.location="/cadastrarloja"
    }
    
    return(
        <CadastroUsuarioContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Email" type="email" name="email" onChange={handleInput}/>
            <InputLojaOn placeholder="Senha" type="password" name="password" onChange={handleInput}/>
            <InputLojaOn placeholder="Repetir senha" type="password" onChange={handleInput}/>
            <CadastroUsuarioButton onClick={handleClick}>Próximo</CadastroUsuarioButton>
            <Cadastre onClick={()=>window.location="/login"}>Já tem uma conta? Faça login</Cadastre>
        </CadastroUsuarioContainer>
    );
}