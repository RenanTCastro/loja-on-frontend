import React from "react";
import { useState } from "react";
import {InputLojaOn} from "../InputLojaOn/InputLojaOn";
import {DeleteIconComponent} from "../DeleteIconComponent/index"

import { 
    AddContainer,
    Text,
    TextOptions,
    Button,
    Input,
    InputQuantity,
    OptionsContainer
} from "./styles";

export function Variacao(params){
    let dataArray = [];

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [variation, setVariation] = useState();
    const [hasOptions, setHasOptions] =  useState();
    
    const handleClick = ()=>{
        setHasOptions(!hasOptions)
    }

    const handleAddOption = ()=>{
        setCount(count + 1);
        const newOption = 
        [
            <div id={"v"+count} >
            <OptionsContainer style={{justifyContent: "space-between"}}>
                <div>
                    <TextOptions>Opção</TextOptions>
                    <Input placeholder="Ex. M" onChange={handleChangeOptions} name="option" id={"v"+count}/>   
                </div>
                <div>
                    <TextOptions>Quantidade</TextOptions>
                    <InputQuantity placeholder="Ex. 98" type="number" onChange={handleChangeOptions} name="quantity" id={"v"+count}/>
                </div>
                <DeleteIconComponent width="11.111vw" height="11.111vw" value={"v"+count} onClick={handleDeleteOption}/>
            </OptionsContainer>
            </div>
        ]       
        setOptions([...options, newOption]);
    }

    const handleDeleteOption = (e)=>{
       const component = e.currentTarget.getAttribute('value')
       
       const pos = data.map((e)=> e.id);
       const index = pos.indexOf(component);
       dataArray = dataArray.splice(index,1);
       setData(dataArray)

       document.getElementById(component).remove()
    }

    const handleChangeVariation = (e)=>{
        setVariation({[e.target.name]: e.target.value});
        console.log(variation)
    }

    const handleChangeOptions = (e)=>{
        dataArray = data;
        const pos = dataArray.map((e)=> e.id);
        const index = pos.indexOf(e.target.id);
        if(index === -1){
            const dataAux = {
                id: e.target.id,
                [e.target.name]: e.target.value
            }
            dataArray.push(dataAux)
            setData(dataArray)
        }else{
            dataArray[index] = {
                ...dataArray[index],
                [e.target.name]: e.target.value
            }
            setData(dataArray)
        }
    }


    return(
        <div style={{width: "87.778vw"}}>
            <Text style={{marginBottom: "10px"}}>Variações</Text>
            {
               !hasOptions ? 
                <AddContainer onClick={handleClick}>
                    <Button>+</Button> 
                    <Text>Adicionar novo conjunto</Text>
                </AddContainer>
                :       
                <div >
                    <TextOptions>Tipo de variação</TextOptions>
                    <InputLojaOn placeholder="Ex. Tamanho" name="variation" onChange={handleChangeVariation}/>
                    
                    {options}
                    
                    <AddContainer onClick={handleAddOption}>
                        <Button>+</Button> 
                        <Text>Adicionar opção</Text>
                    </AddContainer>
                </div>
            }
        </div>
    );
}