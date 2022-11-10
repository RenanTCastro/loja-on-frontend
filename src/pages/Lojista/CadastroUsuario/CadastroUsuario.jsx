import React, { useState } from "react";
import Cookies from 'js-cookie'

import Logo from "../../../assets/Logo.svg"
import { ButtonLojaOn, InputLojaOn } from "../../../components";

import { 
    CadastroUsuarioContainer,
    LogoImg,
    Cadastre
} from "./styles";

export default function CadastroUsuario(){
    const [userData, setUserData] = useState({});

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleClick = () =>{
        const pass = document.getElementById("pass").value;
        const repeatPass = document.getElementById("repeatpass").value;
        
        if(pass === repeatPass){
            Cookies.set("email", userData.email);
            Cookies.set("password", userData.password);
            window.location="/cadastrarloja";
        }
    }
    
    return(
        <CadastroUsuarioContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Email" type="email" name="email" onChange={handleInput}/>
            <InputLojaOn id="pass" placeholder="Senha" type="password" name="password" onChange={handleInput}/>
            <InputLojaOn id="repeatpass" placeholder="Repetir senha" type="password" onChange={handleInput}/>
            <ButtonLojaOn onClick={handleClick} name="Próximo"/>
            <Cadastre onClick={()=>window.location="/login"}>Já tem uma conta? Faça login</Cadastre>
        </CadastroUsuarioContainer>
    );
}