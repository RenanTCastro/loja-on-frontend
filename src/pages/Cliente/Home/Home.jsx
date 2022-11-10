import React, { useEffect, useState } from "react";

import { Menu } from "../../../components";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconSearch from "../../../assets/searchIcon.png"
import IconLoja from "../../../assets/lojaIcon.png"

import api from "../../../services/api";
import auth from "../../../utils/auth";

import { 
    HomeContainer,
    LojaIcon,
    Bio,
    SearchBar,
    SearchInput,
    SearcIcon,
    ProductsContainer
} from "./styles";

export default function Home(){
    const [productsData, setProductsData] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        api.get(`/getAllProducts/${auth.get().user_id}`)
        .then((res)=>{
            setProductsData(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("Erro ao buscar produtos", err)
        })
    },[]);

    useEffect(()=>{
        api.get(`/lojainfo/${auth.get().user_id}`)
        .then((res)=>{
            setUserData(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log("Erro ao buscar loja", err)
        })
    },[]);
    
    return(
        <HomeContainer>
            <Menu page="Cliente"/>
            <LojaIcon src={IconLoja}/>
            <Bio>{userData?.bio}</Bio>
            <SearchBar>
                <SearchInput placeholder="Pesquisar..."/>
                <SearcIcon src={IconSearch} onClick={()=>{console.log("Clicou!")}}></SearcIcon>
            </SearchBar>
            <ProductsContainer>
                {productsData.map((e)=>{
                    return <ProductCard text="Adicionar à sacola" info={e}/>
                })}
            </ProductsContainer>
        </HomeContainer>
    );
}