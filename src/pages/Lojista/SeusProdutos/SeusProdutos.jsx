import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconAdd from "../../../assets/add.svg"
import IconShare from "../../../assets/share.svg"

import { Menu } from "../../../components";

import { 
    SeusProdutosContainer,
    SearchInput,
    SearchAndButtonContainer,
    ButtonContainer,
    Button,
    ProductsContainer
} from "./styles";
import api from "../../../services/api";
import auth from "../../../utils/auth";

export default function SeusProdutos(){
    const [productsData, setProductsData] = useState([]);
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

    return(
        <SeusProdutosContainer>
            <Menu page="Seus produtos" text="Seus produtos"/>
            
            <SearchAndButtonContainer>
                <SearchInput placeholder="Pesquisar..." onChange={handleInput}/>
                <ButtonContainer>
                    <Button onClick={()=>window.location="/adicionarproduto"}>Novo produto <img src={IconAdd} alt="icone de adicionar"/></Button>
                    <Button>Compartilhar <img src={IconShare} alt="icone de compartilhar"/></Button>                
                </ButtonContainer>
            </SearchAndButtonContainer>

            <ProductsContainer>
                {productsData.map((e)=>{
                    return <ProductCard text="EDITAR" info={e}/>
                })}
            </ProductsContainer>
        </SeusProdutosContainer>
    );
}