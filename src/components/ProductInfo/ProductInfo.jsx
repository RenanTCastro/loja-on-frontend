import React, { useRef, useEffect, useState } from "react";
import Cookies from 'js-cookie';
 
import { 
    DivProductInfo,
    DivProductOptions,
    TextOption,
    TextQuantity,
    DivOption,
    DivProductQuantity,
    DivQuantity,
    DivChangeQuantity,
    DivChangeQuantityText,
    AddSacolaButton,
    DivProductAdd
} from "./styles";

export function ProductInfo(params){
    let saveTotal = 0;
    const { data } = params;
    
    const actualValue = useRef(-1);
    const checkValue = useRef(false);

    const [options, setOptions] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [optionsQuantity, setOptionsQuantity] = useState(1);
    
    useEffect(()=>{
        if(data.data){
            const optionsDataAux = JSON.parse(JSON.parse(JSON.stringify(data.data)));
            const optionsDataHTML = optionsDataAux.map((e,i)=>{
                if(!e.quantity || e?.quantity === '0'){
                    return <></>
                }else{
                    return <DivOption value={e.quantity} onClick={handleClick} title={(i).toString()}>{e.option}</DivOption>
                }
            })

            var total = optionsDataAux.reduce(function(acc,obj){ 
                return acc + (obj.quantity!== undefined ? parseInt(obj.quantity) : 0)
            },0); 

            // eslint-disable-next-line react-hooks/exhaustive-deps
            saveTotal = total;
            setOptionsQuantity(total)
            setOptions(optionsDataHTML);
        }
    },[data]);

    const handleClick = (e)=>{
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
            setOptionsQuantity(saveTotal);
        }else{
            const optionQuantity = e.target.getAttribute("value");
            setOptionsQuantity(optionQuantity);
        }
        
        actualValue.current = newIndex
    }

    useEffect(()=>{
        if(data.variation && quantity > optionsQuantity){
            setQuantity(parseInt(optionsQuantity));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionsQuantity, quantity]);

    return(
        <DivProductInfo>
            {
                data.variation ?
                <>
                    <TextOption>{data.variation}:</TextOption>
                    <DivProductOptions id="parent">{options}</DivProductOptions>
                    <TextQuantity>{optionsQuantity} disponíveis</TextQuantity>
                </>
                :
                <></>
            }

            <DivProductAdd>
                <DivProductQuantity>
                    <DivQuantity>{quantity}</DivQuantity>
                    <DivChangeQuantity>
                        <DivChangeQuantityText onClick={()=>{
                            if(data.variation){ 
                                if(quantity < optionsQuantity)setQuantity(quantity+1);
                            }else{
                                if(quantity < 999)setQuantity(quantity+1);
                            }
                        }}>+</DivChangeQuantityText>
                        <DivChangeQuantityText onClick={()=>{if(quantity > 1)setQuantity(quantity-1);}}>-</DivChangeQuantityText>
                    </DivChangeQuantity>
                </DivProductQuantity>
                <AddSacolaButton>Adicionar à sacola</AddSacolaButton>
            </DivProductAdd>
        </DivProductInfo>
    );
}