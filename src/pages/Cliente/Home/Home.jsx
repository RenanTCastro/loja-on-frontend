import React, { useEffect, useState } from "react";

import { Menu } from "../../../components";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconLoja from "../../../assets/lojaIcon.png"

import api from "../../../services/api";
import auth from "../../../utils/auth";
import upload from "../../../utils/upload";

import { 
    HomeContainer,
    LojaIcon,
    Bio,
    SearchInput,
    ProductsContainer
} from "./styles";

export default function Home(){
    const [productsData, setProductsData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [filter, setFilter] = useState({filter:""});

    const handleInput = (e) =>{
        setFilter({...filter, "filter": e.target.value})
    }

    useEffect(()=>{
        api.post(`/getAllProducts/${auth.get().user_id}`, filter)
        .then((res)=>{
            setProductsData(res.data);
        })
        .catch((err)=>{
            console.log("Erro ao buscar produtos", err)
        })
    },[filter]);

    useEffect(()=>{
        api.get(`/lojainfo/${auth.get().user_id}`)
        .then((res)=>{
            setUserData(res.data);
        })
        .catch((err)=>{
            console.log("Erro ao buscar loja", err)
        })
    },[]);

    return(
        <HomeContainer>
            <Menu page="Cliente"/>

            <form onSubmit={upload}>
                <input type="file"/>
                <button type="submit">Enviar</button>
            </form>
            <br/>

            <LojaIcon src={IconLoja}/>
            <Bio>{userData?.bio}</Bio>
            <SearchInput placeholder="Pesquisar..." onChange={handleInput}/>
            <ProductsContainer>
                {productsData.map((e)=>{
                    return <ProductCard text="Adicionar à sacola" info={e}/>
                })}
            </ProductsContainer>
        </HomeContainer>
    );
}