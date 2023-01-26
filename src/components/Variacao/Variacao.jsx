import React, { useRef } from "react";
import { useState } from "react";
import {InputLojaOn} from "../InputLojaOn/InputLojaOn";
import {DeleteIconComponent} from "../DeleteIconComponent/index"

import { 
    AddContainer,
    Text,
    TextOptions,
    Input,
    InputQuantity,
    OptionsContainer
} from "./styles";
import { useEffect } from "react";
import { AddOptionIconComponent } from "../AddOptionIconComponent";

export function Variacao(params){
    let dataArray = useRef([]);
    const count = useRef(0);
    const quantity = useRef(0);

    const { setVariationData, productOptions, productVariation } = params

    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [variation, setVariation] = useState();
    const [hasOptions, setHasOptions] =  useState(false);

    const handleAddOption = ()=>{
        count.current = count.current + 1;
        quantity.current = quantity.current + 1;
        
        const newOption = 
        [
            <div id={"v"+count.current} >
            <OptionsContainer style={{justifyContent: "space-between"}}>
                <div>
                    <TextOptions>Opção</TextOptions>
                    <Input placeholder="Ex. M" onChange={handleChangeOptions} name="option" id={"v"+count.current}/>   
                </div>
                <div>
                    <TextOptions>Quantidade</TextOptions>
                    <InputQuantity placeholder="Ex. 98" type="number" onChange={handleChangeOptions} name="quantity" id={"v"+count.current}/>
                </div>
                <DeleteIconComponent width="11.111vw" height="11.111vw" value={"v"+count.current} onClick={handleDeleteOption}/>
            </OptionsContainer>
            </div>
        ]       
        options ? setOptions([...options, newOption]) : setOptions(newOption);
    }

    const handleDeleteOption = async  (e)=>{
       const component = e.currentTarget.getAttribute('value')
       dataArray.current = await dataArray.current.filter(obj => obj.id !== component);
       setData(dataArray.current)

       let newData = JSON.stringify(dataArray.current)
       const addProductData = {
           variation: variation?.variation,
           data: newData
       }
       setVariationData(addProductData)

       quantity.current = quantity.current - 1;
       document.getElementById(component).remove()
    }

    const handleChangeVariation = (e)=>{
        setVariation({[e.target.name]: e.target.value});
        let newData = JSON.stringify(data)
        const addProductData = {
            variation: e.target.value,
            data: newData
        }
        setVariationData(addProductData)
    }

    const handleChangeOptions = (e)=>{
        const pos = dataArray.current.map((e)=> e.id);
        const index = pos.indexOf(e.target.id);
        if(index === -1){
            const dataAux = {
                id: e.target.id,
                [e.target.name]: e.target.value
            }
            dataArray.current.push(dataAux)
            setData(dataArray.current)
            let newData = JSON.stringify(dataArray.current)
            const addProductData = {
                variation: variation?.variation,
                data: newData
            }
            setVariationData(addProductData)
        }else{
            dataArray.current[index] = {
                ...dataArray.current[index],
                [e.target.name]: e.target.value
            }
            setData(dataArray.current)
            let newData = JSON.stringify(dataArray.current)
            const addProductData = {
                variation: variation?.variation,
                data: newData
            }
            setVariationData(addProductData)
        }
    }

    useEffect(()=>{
        setData(data);
    },[data]);

    useEffect(()=>{
        if(productOptions !== null && productOptions !== undefined){
            const savedOptions = JSON.parse(JSON.parse(JSON.stringify(productOptions)));
            const higherId = savedOptions.reduce((p,c) =>{return (p.id > c.id) ? p : c})
            count.current = higherId && parseInt(higherId.id.split('v')[1]);
            setHasOptions(true)
            const datas = savedOptions.map((e)=>{
                quantity.current = quantity.current + 1;

                return (
                    <div id={e.id} >
                        <OptionsContainer style={{justifyContent: "space-between"}}>
                            <div>
                                <TextOptions>Opção</TextOptions>
                                <Input 
                                    placeholder="Ex. M" 
                                    onChange={handleChangeOptions} 
                                    name="option" id={e.id} 
                                    defaultValue={e.option}
                                />   
                            </div>
                            <div>
                                <TextOptions>Quantidade</TextOptions>
                                <InputQuantity 
                                    placeholder="Ex. 98" 
                                    type="number" 
                                    onChange={handleChangeOptions} 
                                    name="quantity" id={e.id} 
                                    defaultValue={e.quantity}
                                />
                            </div>
                            <DeleteIconComponent 
                                width="11.111vw" 
                                height="11.111vw" 
                                value={e.id} 
                                onClick={handleDeleteOption}
                            />
                        </OptionsContainer>
                    </div>            
                )
            })
            let newData = JSON.stringify(savedOptions)
            const productData = {
                variation: productVariation,
                data: newData
            }
            dataArray.current.push(...savedOptions)
            setData(savedOptions)
            setOptions(datas)
            setVariationData(productData)
            setVariation({variation: productVariation});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productOptions])
    console.log(hasOptions)
    return(
        <div style={{width: "87.778vw"}}>
            <Text style={{marginBottom: "10px"}}>Variações</Text>
            {
               !hasOptions ? 
                <>
                    <AddContainer onClick={()=>setHasOptions(true)}>
                        <AddOptionIconComponent width="8vw" height="8vw"/> 
                        <Text style={{marginLeft: "10px"}}>Adicionar novo conjunto</Text>
                    </AddContainer>
                    <InputLojaOn placeholder="Ex. 99" type="number" text="Quantidade" name="quantity" onChange={handleChangeVariation}/>
                </>
                :       
                <div >
                    <TextOptions>Tipo de variação</TextOptions>
                    <InputLojaOn placeholder="Ex. Tamanho" name="variation" onChange={handleChangeVariation}/>
                    
                    {options}
                    
                    {
                        quantity.current >= 8 ? <></> : 
                        <AddContainer onClick={handleAddOption}>
                            <AddOptionIconComponent width="8vw" height="8vw"/> 
                            <Text style={{marginLeft: "10px"}}>Adicionar opção</Text>
                        </AddContainer>
                    }

                </div>
            }
        </div>
    );
}

