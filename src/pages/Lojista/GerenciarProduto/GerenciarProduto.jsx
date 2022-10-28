import React, { useEffect, useState } from "react";

import api from "../../../services/api";
import auth from "../../../services/auth";

import Foto from "../../../assets/defaultProductImage.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    GerenciarProdutoContainer,
    GerenciarProdutoTexto,
    FotoProduto
} from "./styles";

export default function GerenciarProduto(){
    const [productData, setProductData] = useState({});

    let product_id = window.location.search.substring(1).split('&')[0].split('=')[1];

    useEffect(()=>{
        api.get(`/getProduct/${product_id}`)
        .then((res)=>{
            setProductData(res.data[0]);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("Erro ao buscar produto", err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleInput = (e)=>{
        setProductData({...productData, [e.target.name] : e.target.value});
    }

    const handleSave = async()=>{
        await api.put(`/editProduct/${product_id}`, {...productData, user_id: auth.get().user_id})
        .then((res)=>{
            window.location="/produtos";
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    const handleDelete = async()=>{
        await api.delete(`/deleteProduct/${product_id}`)
        .then(()=>{
            window.location="/produtos";
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <GerenciarProdutoContainer>

            <FotoProduto src={Foto}/>
            <GerenciarProdutoTexto>
                Definir foto do produto
            </GerenciarProdutoTexto>
            
            <div style={{marginBottom: "2.778vw"}}>
                <InputLojaOn placeholder="Nome do produto" onChange={handleInput} name="name" value={productData?.name}/>
                <InputLojaOn placeholder="Preço" type="number" onChange={handleInput} name="price" value={productData?.price}/>
                <TextAreaLojaOn rows="5" placeholder="Descrição do produto" onChange={handleInput} name="description" value={productData?.description}/>
                <InputLojaOn placeholder="Código do produto" onChange={handleInput} name="code" value={productData?.code}/>
            </div>
            
            <ButtonLojaOn name="Salvar alterações" colorType="confirmar" onClick={handleSave}/>
            <ButtonLojaOn name="Voltar" onClick={()=>window.location="/produtos"}/>
            <ButtonLojaOn name="Apagar produto" colorType="apagar" onClick={handleDelete}/>

        </GerenciarProdutoContainer>
    );
}