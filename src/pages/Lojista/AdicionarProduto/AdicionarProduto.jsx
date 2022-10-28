import React, { useState } from "react";

import api from "../../../services/api";
import auth from "../../../services/auth";

import Foto from "../../../assets/defaultProductImage.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    AdicionarProdutoContainer,
    AdicionarProdutoTexto,
    FotoProduto
} from "./styles";

export default function AdicionarProduto(){
    const [productData, setProductData] = useState({});

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

    return(
        <AdicionarProdutoContainer>

            <FotoProduto src={Foto}/>
            <AdicionarProdutoTexto>
                Definir foto do produto
            </AdicionarProdutoTexto>
            
            <div style={{marginBottom: "2.778vw"}}>
                <InputLojaOn placeholder="Nome do produto" onChange={handleInput} name="name"/>
                <InputLojaOn placeholder="Preço" type="number" onChange={handleInput} name="price"/>
                <TextAreaLojaOn rows="5" placeholder="Descrição do produto" onChange={handleInput} name="description"/>
                <InputLojaOn placeholder="Código do produto" onChange={handleInput} name="code"/>
            </div>
            
            <ButtonLojaOn name="Salvar alterações" colorType="confirmar" onClick={handleSave}/>
            <ButtonLojaOn name="Voltar" onClick={()=>window.location="/produtos"}/>

        </AdicionarProdutoContainer>
    );
}