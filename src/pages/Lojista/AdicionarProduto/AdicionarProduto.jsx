import React, { useState } from "react";

import api from "../../../services/api";
import auth from "../../../utils/auth";
import upload from "../../../utils/upload";

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";
import { LoadingAnimations } from "../../../components/LoadingAnimations";
import {Menu} from "../../../components/index";

import NoImage from "../../../assets/noImage.svg";

import { 
    AdicionarProdutoContainer,
    AlterarFoto,
    FotoProduto,
    ButtonContainer
} from "./styles";

export default function AdicionarProduto(){
    const [productData, setProductData] = useState({});
    const [imgURL, setImgURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e)=>{
        setProductData({...productData, [e.target.name] : e.target.value});
    }

    const handleSave = async()=>{
        await api.post('/addProduct', {...productData, user_id: auth.get().user_id})
        .then((res)=>{
            window.location="/produtos";
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    const handleUpload = async(e)=>{
        setIsLoading(true);
        const url = await upload(e)
        setImgURL(url);
        setProductData({...productData, "image" : url});
        setIsLoading(false);    
    } 

    const handleChange = async()=>{
        document.getElementById("changeImage").click();
    } 

    return(
        <AdicionarProdutoContainer>
            <Menu page="Configurações" text="Novo produto"/>

            {isLoading ? <LoadingAnimations/> : <FotoProduto src={imgURL? imgURL : NoImage}/> }

            <AlterarFoto>
                <form onSubmit={handleUpload} id="form1"/>
                Adicionar foto do produto
                <input type="file" style={{display: "none"}} form="form1" onChange={handleChange}/>
                <button type="submit" form="form1" id="changeImage" style={{display: "none"}}/>
            </AlterarFoto>

            
            <InputLojaOn placeholder="Nome do produto" onChange={handleInput} name="name"/>
            <InputLojaOn placeholder="Preço" type="number" onChange={handleInput} name="price"/>
            <TextAreaLojaOn rows="5" placeholder="Descrição do produto" onChange={handleInput} name="description"/>
            <InputLojaOn placeholder="Código do produto" onChange={handleInput} name="code"/>
            
            <ButtonContainer>
                <ButtonLojaOn name="Salvar alterações" colorType="confirmar" onClick={handleSave}/>
                <ButtonLojaOn name="Voltar" onClick={()=>window.location="/produtos"}/>
            </ButtonContainer>

        </AdicionarProdutoContainer>
    );
}