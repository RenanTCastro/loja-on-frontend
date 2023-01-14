import React, { useEffect, useState } from "react";

import api from "../../../services/api";
import auth from "../../../utils/auth";
import upload from "../../../utils/upload";

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";
import { LoadingAnimations } from "../../../components/LoadingAnimations";
import {Menu} from "../../../components/index";

import NoImage from "../../../assets/noImage.svg";

import { 
    GerenciarProdutoContainer,
    AlterarFoto,
    FotoProduto,
    ButtonContainer
} from "./styles";

export default function GerenciarProduto(){
    const [productData, setProductData] = useState({});
    const [imgURL, setImgURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        <GerenciarProdutoContainer>
            <Menu page="Configurações" text="Editar Produto"/>

            {isLoading ? 
                <LoadingAnimations/> : 
                <FotoProduto 
                    src={productData?.image? imgURL? imgURL : productData?.image : NoImage}/> 
            }

            <AlterarFoto>
                <form onSubmit={handleUpload} id="form1"/>
                Alterar foto do produto
                <input type="file" style={{display: "none"}} form="form1" onChange={handleChange}/>
                <button type="submit" form="form1" id="changeImage" style={{display: "none"}}/>
            </AlterarFoto>
            
            <InputLojaOn placeholder="Ex. Camisa básica preta" text="Nome do produto" onChange={handleInput} name="name" value={productData?.name}/>
            <InputLojaOn placeholder="99,90" text="Preço" type="number" onChange={handleInput} name="price" value={productData?.price}/>
            <TextAreaLojaOn rows="5" placeholder="Fale sobre o seu produto..." text="Descrição do produto" onChange={handleInput} name="description" value={productData?.description}/>
            <InputLojaOn placeholder="Ex. 42FKJ4" text="Código do produto" onChange={handleInput} name="code" value={productData?.code}/>

            <ButtonContainer>
                <ButtonLojaOn name="Salvar alterações" colorType="confirmar" onClick={handleSave}/>
                <ButtonLojaOn name="Voltar" onClick={()=>window.location="/produtos"}/>
                <ButtonLojaOn name="Apagar produto" colorType="apagar" onClick={handleDelete}/>
            </ButtonContainer>
           

        </GerenciarProdutoContainer>
    );
}