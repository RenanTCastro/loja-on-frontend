import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconSearch from "../../../assets/searchIcon.png"
import IconAdd from "../../../assets/add.svg"
import IconShare from "../../../assets/share.svg"

import { 
    SeusProdutosContainer,
    SearchBar,
    SearchInput,
    SearcIcon,
    ButtonContainer,
    Button,
    ProductsContainer
} from "./styles";

export default function SeusProdutos(){
    return(
        <SeusProdutosContainer>
            <SearchBar>
                <SearchInput/>
                <SearcIcon src={IconSearch} onClick={()=>{console.log("Clicou!")}}></SearcIcon>
            </SearchBar>

            <ButtonContainer>
                <Button>Novo produto <img src={IconAdd} alt="icone de adicionar"/></Button>
                <Button>Compartilhar <img src={IconShare} alt="icone de compartilhar"/></Button>                
            </ButtonContainer>

            <ProductsContainer>
                <ProductCard text="Editar"/>
                <ProductCard text="Editar"/>
                <ProductCard text="Editar"/>
                <ProductCard text="Editar"/>
                <ProductCard text="Editar"/>
            </ProductsContainer>
        </SeusProdutosContainer>
    );
}