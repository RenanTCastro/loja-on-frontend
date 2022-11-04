import React, { useState } from "react";
import Cookies from "js-cookie";

import Logo from "../../../assets/Logo.svg"
import api from "../../../services/api";

import { 
    CadastroLojaContainer,
    LogoImg,
    // CadastroLojaButton,
} from "./styles";

import { ButtonLojaOn, InputLojaOn, TextAreaLojaOn } from "../../../components";

export default function CadastroLoja(){
    const [userData, setUserData] = useState({});

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleSend = ()=>{
        const userCompleteData = {
            ...userData, 
            "email": Cookies.get("email"),
            "password": Cookies.get("password"),
            "url": "teste-url"
        }
        console.log(userCompleteData)
        api.post('/register', userCompleteData)
        .then(()=>{
            console.log("Conta criada");
            Cookies.remove("token")
            Cookies.remove("user_id")
            Cookies.remove("email")
            Cookies.remove("password")
            window.location = "/login";
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <CadastroLojaContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Nome da loja" name="name" onChange={handleInput}/>
            <InputLojaOn placeholder="Whatsapp para pedidos" name="whatsapp" onChange={handleInput}/>
            <TextAreaLojaOn placeholder="Bio" name="bio" onChange={handleInput}/>
            <InputLojaOn type="color" name="color" onChange={handleInput} />
            <ButtonLojaOn onClick={handleSend} name="Finalizar"/>
            <ButtonLojaOn onClick={()=>window.location="/cadastro"} name="Voltar"/>
        </CadastroLojaContainer>
    );
}