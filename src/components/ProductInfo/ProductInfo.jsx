import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';
 
import { 
    DivProductInfo,
    DivProductOptions,
    TextOption,
    DivOption,
    DivProductQuantity,
    DivQuantity,
    DivChangeQuantity,
    DivChangeQuantityText,
    AddSacolaButton,
    DivProductAdd
} from "./styles";

export function ProductInfo(params){
    const { data } = params;
    const actualValue = useRef(-1)
    const checkValue = useRef(false)
    const [options, setOptions] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        if(data.data){
            const optionsData = JSON.parse(JSON.parse(JSON.stringify(data.data)));
            const optionsDataHTML = optionsData.map((e,i)=>{
                if(!e.quantity || e?.quantity === '0'){
                    return <></>
                }else{
                    return <DivOption onClick={handleClick} value={(i).toString()}>{e.option}</DivOption>
                }
            })
            setOptions(optionsDataHTML);
        }
    }, [data]);
    

    const handleClick = (e)=>{
        const lastIndex = actualValue.current;
        const newIndex = e.target.getAttribute("value");
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

        actualValue.current = newIndex
    }

    return(
        <DivProductInfo>
            <TextOption>Tamanho:</TextOption>
            <DivProductOptions id="parent">
                {options}
                <DivOption onClick={handleClick} value={"1"}>asdsdasd</DivOption>
            </DivProductOptions>

            <DivProductAdd>
                <DivProductQuantity>
                    <DivQuantity>{quantity}</DivQuantity>
                    <DivChangeQuantity>
                        <DivChangeQuantityText onClick={()=>setQuantity(quantity+1)}>+</DivChangeQuantityText>
                        <DivChangeQuantityText 
                            onClick={()=>{if(quantity > 0)setQuantity(quantity-1);}}>
                            -
                        </DivChangeQuantityText>
                    </DivChangeQuantity>
                </DivProductQuantity>
                <AddSacolaButton>Adicionar à sacola</AddSacolaButton>
            </DivProductAdd>
        </DivProductInfo>
    );
}