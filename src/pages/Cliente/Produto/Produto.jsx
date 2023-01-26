import React, { useEffect, useState } from "react";

import { Menu, ProductInfo } from "../../../components";
import ProductCard from "../../../components/ProductCard/ProductCard";

import api from "../../../services/api";
import auth from "../../../utils/auth";

import NoImage from "../../../assets/noImage.svg";

import { 
    ProductContainer,
    ProductInfoContainer,
    ProductName,
    ProductPrice,
    ProductImage,
    AddSacolaButton,
    ProductDescription,
    OtherProductsLabel,
    OtherProducts
} from "./styles";

export default function Home(){
    const [productData, setProductData] = useState({});
    const [othersProductsData, setOthersProductsData] = useState([]);

    let product_id = window.location.search.substring(1).split('&')[0].split('=')[1];

    useEffect(()=>{
        api.get(`/getProduct/${product_id}`)
        .then((res)=>{
            setProductData(res.data[0]);
        })
        .catch((err)=>{
            console.log("Erro ao buscar produto", err)
        });

        api.get(`/getOthersProducts/${auth.get().user_id}/${product_id}`)
        .then((res)=>{
            setOthersProductsData(res.data);
        })
        .catch((err)=>{
            console.log("Erro ao buscar produtos", err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <ProductContainer>
            <Menu page="Product"/>

            <ProductInfoContainer>
                <div>
                    <ProductName>{productData?.name}</ProductName>
                    <ProductPrice>{productData?.price}</ProductPrice>
                    {window.screen.width >= 800 ? 
                        <>
                            <ProductDescription>{productData?.description}</ProductDescription> 
                            <AddSacolaButton>Adicionar à sacola</AddSacolaButton>
                        </>
                    : 
                        <></>
                    }
                </div>
                <ProductImage src={productData?.image? productData?.image : NoImage}/>
            </ProductInfoContainer>
            
            {window.screen.width < 800 ?
                <>
                    <ProductInfo data={productData}/>
                    {/* <AddSacolaButton>Adicionar à sacola</AddSacolaButton> */}
                    <ProductDescription>{productData?.description}</ProductDescription>
                </>
                :
                <></>
            }
            <OtherProductsLabel>Outros produtos</OtherProductsLabel>
            <OtherProducts>
                {othersProductsData.map((e)=>{
                    return <ProductCard text="Adicionar à sacola" info={e}/>
                })}
            </OtherProducts>
        </ProductContainer>
    );
}