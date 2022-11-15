import React, { useEffect, useState } from "react";

import Foto from "../../../assets/lojaIcon.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";
import {Menu} from "../../../components/index";
import auth from "../../../utils/auth";
import api from "../../../services/api";
import { 
    ConfiguracoesContainer,
    AlterarFoto,
    FotoProduto,
    ButtonContainer
} from "./styles";
import upload from "../../../utils/upload";
import { LoadingAnimations } from "../../../components/LoadingAnimations";

export default function Configuracoes(){
    const [userData, setUserData] = useState({});
    const [imgURL, setImgURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value});
    }

    const handleSave = ()=>{
        api.put(`/editarperfil/${auth.get().user_id}`, userData)
        .then(()=>{
            console.log("Deu certo");
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
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("Erro ao buscar produto", err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleUpload = async(e)=>{
        setIsLoading(true);
        const a = await upload(e)
        setImgURL(a);
        setIsLoading(false);    
    } 

    const handleChange = async()=>{
        document.getElementById("changeImage").click();
    } 

    return(
        <ConfiguracoesContainer>
            <Menu page="Configurações" text="Configurações"/>
            {isLoading ? <LoadingAnimations/> : <FotoProduto src={imgURL}/> }

            <AlterarFoto>
                <form onSubmit={handleUpload} id="form1"/>
                Alterar foto de perfil
                <input type="file" style={{display: "none"}} form="form1" onChange={handleChange}/>
                <button type="submit" form="form1" id="changeImage" style={{display: "none"}}/>
            </AlterarFoto>

            <InputLojaOn placeholder="Nome da loja" name="name" value={userData?.name} onChange={handleInput}/>
            <InputLojaOn placeholder="Whatsapp" name="whatsapp" value={userData?.whatsapp} onChange={handleInput}/>
            <TextAreaLojaOn rows="5" placeholder="Descrição da loja" name="bio" value={userData?.bio} onChange={handleInput}/>
            <InputLojaOn placeholder="Cor principal" name="color" value={userData?.color} onChange={handleInput}/>
            
            <ButtonContainer>
                <ButtonLojaOn name="Salvar alterações" onClick={handleSave}/>
                <ButtonLojaOn name="Voltar" onClick={()=>window.location = "/produtos"}/>
                <ButtonLojaOn name="Sair da conta" onClick={()=>auth.clear()}/>                
            </ButtonContainer>


        </ConfiguracoesContainer>
    );
}