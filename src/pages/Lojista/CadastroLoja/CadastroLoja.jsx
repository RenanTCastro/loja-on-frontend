import React, { useState } from "react";
import Cookies from "js-cookie";

import Logo from "../../../assets/Logo.svg"
import api from "../../../services/api";
import upload from "../../../utils/upload";

import { 
    CadastroLojaContainer,
    LogoImg,
    AlterarFoto,
    ButtonContainer,
} from "./styles";

import { 
    ButtonLojaOn, 
    InputLojaOn, 
    InputColorLojaOn, 
    LoadingAnimations, 
    TextAreaLojaOn 
} from "../../../components";

export default function CadastroLoja(){
    const [userData, setUserData] = useState({});
    const [imgURL, setImgURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

    const handleUpload = async(e)=>{
        setIsLoading(true);
        const url = await upload(e)
        setImgURL(url);
        setUserData({...userData, "avatar_url" : url});
        setIsLoading(false);    
    } 

    const handleChange = async()=>{
        document.getElementById("changeImage").click();
    } 

    return(
        <CadastroLojaContainer>
            
            {isLoading ? <LoadingAnimations/> : <LogoImg src={imgURL? imgURL : Logo}/> }

            <AlterarFoto>
                <form onSubmit={handleUpload} id="form1"/>
                Selecionar foto de perfil
                <input type="file" style={{display: "none"}} form="form1" onChange={handleChange}/>
                <button type="submit" form="form1" id="changeImage" style={{display: "none"}}/>
            </AlterarFoto>

            <InputLojaOn placeholder="Nome da loja" name="name" onChange={handleInput}/>
            <InputLojaOn placeholder="Whatsapp para pedidos" name="whatsapp" onChange={handleInput}/>
            <TextAreaLojaOn placeholder="Bio" name="bio" onChange={handleInput}/>
            <InputColorLojaOn text={userData?.color} name="color" onChange={handleInput}/>

            <ButtonContainer>
                <ButtonLojaOn onClick={handleSend} name="Finalizar"/>
                <ButtonLojaOn onClick={()=>window.location="/cadastro"} name="Voltar"/>
            </ButtonContainer>
        </CadastroLojaContainer>
    );
}