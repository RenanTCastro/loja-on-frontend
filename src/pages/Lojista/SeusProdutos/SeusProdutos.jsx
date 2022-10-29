import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconSearch from "../../../assets/searchIcon.png"
import IconAdd from "../../../assets/add.svg"
import IconShare from "../../../assets/share.svg"

import { Menu } from "../../../components";

import { 
    SeusProdutosContainer,
    SearchBar,
    SearchInput,
    SearcIcon,
    ButtonContainer,
    Button,
    ProductsContainer
} from "./styles";
import api from "../../../services/api";
import auth from "../../../services/auth";

export default function SeusProdutos(){
    const [productsData, setProductsData] = useState([]);
    const [filter, setFilter] = useState({name:""});

    const handleInput = (e) =>{
        setFilter({...filter, "name": e.target.value})
    }

    useEffect(()=>{
        api.get(`/getAllProducts/${auth.get().user_id}`, {filter:"dd"})
        .then((res)=>{
            setProductsData(res.data);
        })
        .catch((err)=>{
            console.log("Erro ao buscar produtos", err)
        })
    },[filter]);

    return(
        <SeusProdutosContainer>
            <Menu page="Seus produtos" text="Seus produtos"/>
            <SearchBar>
                <SearchInput placeholder="Pesquisar..." onChange={handleInput}/>
            </SearchBar>

            <ButtonContainer>
                <Button onClick={()=>window.location="/adicionarproduto"}>Novo produto <img src={IconAdd} alt="icone de adicionar"/></Button>
                <Button>Compartilhar <img src={IconShare} alt="icone de compartilhar"/></Button>                
            </ButtonContainer>

            <ProductsContainer>
                {productsData.map((e)=>{
                    return <ProductCard text="EDITAR" info={e}/>
                })}
            </ProductsContainer>
        </SeusProdutosContainer>
    );
}