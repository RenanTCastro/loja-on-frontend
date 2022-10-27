import React, { useState } from "react";

import Logo from "../../../assets/Logo.svg"

import { InputLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    LoginContainer,
    LogoImg,
    Cadastre
} from "./styles";

import auth from "../../../services/auth";
import api from "../../../services/api";
import { redirect } from "react-router-dom";

export default function Login(){
    const [userData, setUserData] = useState({});

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleClick = async ()=>{
        await api.post('/login', {email: "renan@gmail.com", password: "123"})
        .then((res)=>{
            auth.save(res.data);
            redirect("/");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <LoginContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Email" type="email" onChange={handleInput} name="email"/>
            <InputLojaOn placeholder="Senha" type="password" onChange={handleInput} name="password"/>
            <ButtonLojaOn name="Entrar" onClick={handleClick}/>
            <Cadastre>Não tem uma conta? Cadastre-se</Cadastre>
        </LoginContainer>
    );
}