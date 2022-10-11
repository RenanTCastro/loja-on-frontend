import React from "react";

import ImagemProduto from "../../../assets/ImagemProduto.png"
import ProductCard from "../../../components/ProductCard/ProductCard";

import { 
    ProductContainer,
    ProductName,
    ProductPrice,
    ProductImage,
    AddSacolaButton,
    ProductDescription,
    OtherProducts
} from "./styles";

export default function Home(){
    return(
        <ProductContainer>
            <ProductName>Cadeira de Madeira Wood Brasileira</ProductName>
            <ProductPrice>R$ 37,90</ProductPrice>
            <ProductImage src={ImagemProduto}/>
            <AddSacolaButton>Adicionar à sacola</AddSacolaButton>
            <ProductDescription>    
                As Cadeiras Brasileiras da Tadah! são a opção nacional para combinar com nossos móveis de madeira! A proposta? Muita cor, leveza e charme.
                <br></br><br></br>
                Vai bem na cozinha e  sala de jantar, mas fica uma beleza também no home office!
                <br></br><br></br>
                Ela é daquele tipo de design atemporal que vai por gerações!
                <br></br><br></br>
                Esta cadeira é feita de madeira de reflorestamento em sua estrutura, e mdf no assento, pintada com uma cor bem viva e laqueada! Coisa linda! 
                <br></br><br></br>
                Feita para ser usada em áreas internas. Deve-se evitar contato com água. Não recomendamos deixar exposta ao sol.
            </ProductDescription>

            <ProductName>Outros produtos</ProductName>
            <OtherProducts>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </OtherProducts>
        </ProductContainer>
    );
}