import React, { useEffect, useState } from "react";

import NoImage from "../../../assets/noImage.svg"

import {Menu} from "../../../components/index";
import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";
import { LoadingAnimations } from "../../../components/LoadingAnimations";

import Cookies from "js-cookie";
import auth from "../../../utils/auth";
import api from "../../../services/api";
import upload from "../../../utils/upload";

import { 
    ConfiguracoesContainer,
    AlterarFoto,
    FotoProduto,
    ButtonContainer
} from "./styles";
import { InputColorLojaOn } from "../../../components/InputColorLojaOn";

export default function Configuracoes(){
    const [userData, setUserData] = useState({});
    const [imgURL, setImgURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value});
    }

    const handleSave = async ()=>{

        api.put(`/editarperfil/${auth.get().user_id}`, userData)
        .then(()=>{
            Cookies.set("color", userData.color);
            window.location = "/produtos";
        })
        .catch((err)=>{
            console.log("Deu ruim", err)
        })
    }

    useEffect(()=>{
        api.get(`/lojainfo/${auth.get().user_id}`)
        .then((res)=>{
            setUserData(res.data);
            setImgURL(res.data.avatar_url);
        })
        .catch((err)=>{
            console.log("Erro ao buscar produto", err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


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
        <ConfiguracoesContainer>
            <Menu page="Configurações" text="Configurações"/>
            {isLoading ? <LoadingAnimations/> : <FotoProduto src={imgURL? imgURL : NoImage}/> }

            <AlterarFoto>
                <form onSubmit={handleUpload} id="form1"/>
                Alterar foto de perfil
                <input type="file" style={{display: "none"}} form="form1" onChange={handleChange}/>
                <button type="submit" form="form1" id="changeImage" style={{display: "none"}}/>
            </AlterarFoto>

            <InputLojaOn placeholder="Nome da loja" name="name" value={userData?.name} onChange={handleInput}/>
            <InputLojaOn placeholder="Whatsapp" name="whatsapp" value={userData?.whatsapp} onChange={handleInput}/>
            <TextAreaLojaOn rows="5" placeholder="Descrição da loja" name="bio" value={userData?.bio} onChange={handleInput}/>
            <InputColorLojaOn text={userData?.color}name="color" onChange={handleInput}/>
            
            <ButtonContainer>
                <ButtonLojaOn name="Salvar alterações" onClick={handleSave}/>
                <ButtonLojaOn name="Voltar" onClick={()=>window.location = "/produtos"}/>
                <ButtonLojaOn name="Sair da conta" onClick={()=>auth.clear()}/>                
            </ButtonContainer>


        </ConfiguracoesContainer>
    );
}