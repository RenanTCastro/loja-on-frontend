import React, { useEffect, useState } from "react";

import Foto from "../../../assets/lojaIcon.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";
import {Menu} from "../../../components/index";
import auth from "../../../utils/auth";
import api from "../../../services/api";
import { 
    ConfiguracoesContainer,
    ConfiguracoesTexto,
    FotoProduto,
    ButtonContainer
} from "./styles";

export default function Configuracoes(){
    const [userData, setUserData] = useState({});

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

    return(
        <ConfiguracoesContainer>
            <Menu page="Configurações" text="Configurações"/>
            <FotoProduto src={Foto}/>
            <ConfiguracoesTexto>
                Alterar foto de perfil
            </ConfiguracoesTexto>
            
            <InputLojaOn placeholder="Nome da loja" name="name" value={userData?.name} onChange={handleInput}/>
            <InputLojaOn placeholder="Whatsapp" name="whatsapp" value={userData?.whatsapp} onChange={handleInput}/>
            <TextAreaLojaOn rows="5" placeholder="Descrição da loja" name="bio" value={userData?.bio} onChange={handleInput}/>
            <InputLojaOn placeholder="Cor principal" name="color" value={userData?.color} onChange={handleInput}/>
            
            <ButtonContainer>
                <ButtonLojaOn name="Salvar alterações" colorType="confirmar" onClick={handleSave}/>
                <ButtonLojaOn name="Voltar" onClick={()=>window.location = "/produtos"}/>
                <ButtonLojaOn name="Sair da conta" colorType="apagar" onClick={()=>auth.clear()}/>                
            </ButtonContainer>


        </ConfiguracoesContainer>
    );
}