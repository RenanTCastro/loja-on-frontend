import React, { useRef } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';

import NoImage from "../../assets/noImage.svg";
import useCartContext from "../../hooks/CartContext";

import ProductQuantityComponent from "../ProductQuantityComponent/ProductQuantityComponent";
import { AddIconComponent } from "../AddIconComponent";
import { EditIconComponent } from "../EditIconComponent";
import { Modal } from "../Modal/Modal";

import { 
    DivProductCard, 
    ImageProduct,
    ProductName,
    ProductCardBox,
    PromotionBox,
    OriginalProductPrice,
    ProductPrice,
    ImageProductModal,
    ProductNameModal,
    ProductPriceModal,
    ProductQuantityModal,
    ModalInfoBox,
    TextOption,
    DivProductOptions,
    DivOption,
    ModalOptions
} from "./styles";
import { useEffect } from "react";

export default function ProductCard(params){
    const buttonText = params.text;
    let saveTotal = 0;
    const actualValue = useRef(-1);
    const checkValue = useRef(false);
    const [options, setOptions] = useState([]);
    const isPromotionalProduct = params.promotion && params.promotion;
    const [quantityModal, setQuantityModal] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const { cartItems, setCartItems } = useCartContext();
    const [isModal, setIsModal] = useState(true);

    const handleClick = ()=>{
        buttonText === 'EDITAR'
        ? window.location = `/gerenciarproduto/?id=${params.info.product_id}` 
        : setIsModal(true)
    }

    const handleClickProduct = ()=>{
        buttonText === 'EDITAR'
        ? console.log()
        : window.location = `/produto/?id=${params.info.product_id}` 
    }

    const handleClickOption = (e)=>{
        const lastIndex = actualValue.current;
        const newIndex = e.target.getAttribute("title");
        const getOptions = document.getElementById("parent").children

        getOptions[newIndex].style.backgroundColor = Cookies.get("color");
        getOptions[newIndex].style.color = "white";
        
        if(lastIndex !== -1 && !checkValue.current){
            getOptions[lastIndex].style.backgroundColor = "white";
            getOptions[lastIndex].style.color = "black";
        }

        if(lastIndex === newIndex){
            checkValue.current = checkValue.current ? false : true
        }else{
            checkValue.current = false;
        }
        
        if(getOptions[newIndex].style.color === "black"){
            setQuantityModal(saveTotal);
        }else{
            const optionQuantity = e.target.getAttribute("value");
            setQuantityModal(optionQuantity);
        }
        
        actualValue.current = newIndex
    }

    useEffect(()=>{
        const data = params.info;
        if(data.data && data.variation){
            const optionsDataAux = JSON.parse(JSON.parse(JSON.stringify(data.data)));
            const optionsDataHTML = optionsDataAux.map((e,i)=>{
                if(!e.quantity || e?.quantity === '0'){
                    return <></>
                }else{
                    return <DivOption value={e.quantity} onClick={handleClickOption} title={(i).toString()}>{e.option}</DivOption>
                }
            })

            var total = optionsDataAux.reduce(function(acc,obj){ 
                return acc + (obj.quantity!== undefined ? parseInt(obj.quantity) : 0)
            },0); 

            // eslint-disable-next-line react-hooks/exhaustive-deps
            saveTotal = total;
            setOptions(optionsDataHTML);
        }
    },[params.info]);

    return(
        <DivProductCard>
            {isModal && 
                <Modal setIsModal={setIsModal} isModal={isModal}>
                    <ModalInfoBox>
                        <div>
                            <ImageProductModal src={params.info.image ? params.info.image : NoImage} alt="Imagem do produto"/>
                        </div>
                        <div>
                            <ProductNameModal>{params.info.name}</ProductNameModal>
                            <ProductPriceModal>{params.info.price}</ProductPriceModal> 
                            <ProductQuantityModal>{quantityModal} disponíveis</ProductQuantityModal> 
                        </div>
                    </ModalInfoBox>
                    <ModalOptions>
                        {
                            params.info.variation ?
                            <>
                                <TextOption>{params.info.variation}:</TextOption>
                                <DivProductOptions id="parent">{options}</DivProductOptions>
                            </>
                            :
                            <></>
                        }        
                    </ModalOptions>
                    <ProductQuantityComponent data={params.info} setQuantityModal={setQuantityModal} quantityModal={quantityModal}/>                   
                </Modal>
            }
            <div style={{display: "flex", flexDirection: "column", height: "100%",justifyContent: "space-between"}}>
                <div>
                    <ImageProduct src={params.info.image ? params.info.image : NoImage} alt="Imagem do produto" onClick={handleClickProduct}/>
                    <ProductName onClick={handleClickProduct}>{params.info.name}</ProductName>
                </div>

                <ProductCardBox>
                    {isPromotionalProduct ?
                        <PromotionBox>
                            <OriginalProductPrice>{params.info.price}</OriginalProductPrice>                
                            <ProductPrice>{params.info.price}</ProductPrice>                
                        </PromotionBox>
                    :
                        <ProductPrice>{params.info.price}</ProductPrice> 
                    } 
                    {
                        buttonText === "EDITAR" ?
                        <EditIconComponent onClick={handleClick}/>:          
                        <AddIconComponent onClick={handleClick}/>
                    }
                </ProductCardBox>
            </div>
        </DivProductCard>
    );
}