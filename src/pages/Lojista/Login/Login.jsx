import React, { useState } from "react";

import Logo from "../../../assets/Logo.svg"

import { InputLojaOn, ButtonLojaOn, ErrorMessageInput } from "../../../components/index";

import { 
    LoginContainer,
    LogoImg,
    Cadastre
} from "./styles";

import auth from "../../../utils/auth";
import api from "../../../services/api";

export default function Login(){
    const [userData, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleClick = async ()=>{
        await api.post('/login', userData)
        .then((res)=>{
            auth.save(res.data);
            window.location="/produtos";
        })
        .catch((err)=>{
            setErrorMessage(err.response.data.error);
            setIsError(true);
        });
    }

    return(
        <LoginContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Email" type="email" onChange={handleInput} name="email"/>
            <InputLojaOn placeholder="Senha" type="password" onChange={handleInput} name="password"/>
            {isError && <ErrorMessageInput errorMessage={errorMessage}/>}
            <ButtonLojaOn name="Entrar" onClick={handleClick}/>
            <Cadastre onClick={()=>window.location="/cadastro"}>Não tem uma conta? Cadastre-se</Cadastre>
        </LoginContainer>
    );
}