import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";

import IconSearch from "../../../assets/searchIcon.png"
import IconLoja from "../../../assets/lojaIcon.png"

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
    return(
        <HomeContainer>
            <LojaIcon src={IconLoja}/>
            <Bio>
                Frete  grátis para todo Brasil ✈️
                Os melhores produtos para a sua casa
                Você só encontra aqui na House On
                Compre já!
            </Bio>
            <SearchBar>
                <SearchInput/>
                <SearcIcon src={IconSearch} onClick={()=>{console.log("Clicou!")}}></SearcIcon>
            </SearchBar>
            <ProductsContainer>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductsContainer>
        </HomeContainer>
    );
}