import React, { useEffect, useState } from "react";

import IconSacola from "../../assets/Sacola.svg"
import IconClose from "../../assets/close.svg"
import IconSettings from "../../assets/settings.svg"

import ProdutoSacola from "./ProdutoSacola/ProdutoSacola";

import { 
    MenuContainer,
    IconeSacola,
    SacolaContainer,
    SacolaBackground,
    SacolaText,
    SacolaButton,
    ProdutoSacolaContainer,
    PageText
} from "./styles";

export default function Menu(props){

    const page = props.page;

    const [isOpen, setIsOpen] = useState(false)
    const [isCliente, setIsCliente] = useState(true)
    const [hideIcon, setHideIcon] = useState(false)

    useEffect(()=>{
        switch(page){
            case 'Cliente':
                setIsCliente(true)
            break;
            case 'Seus produtos':
                setIsCliente(false)
            break;
            case 'Configurações':
                setIsCliente(false);
                setHideIcon(true);
            break;
            default:
        }
    },[page])
    const handleClick = () =>{
        if(isCliente){
            setIsOpen(!isOpen)
        }else{
            window.location = "/editarperfil"
        }
    }
    return(
        <MenuContainer>
            {!isCliente && <PageText>{props.text}</PageText>}
            {!hideIcon && <IconeSacola 
                src={isCliente ? isOpen ? IconClose : IconSacola : IconSettings} 
                onClick={handleClick}
            />}
            {isOpen && isCliente &&
                <>
                    <SacolaContainer>
                        <SacolaText>Sua sacola</SacolaText>
                        <ProdutoSacolaContainer>
                            <ProdutoSacola/>
                            <ProdutoSacola/>

                            <ProdutoSacola/>
                            <ProdutoSacola/>
                            <ProdutoSacola/>
                            <ProdutoSacola/>
                            <ProdutoSacola/>

                        </ProdutoSacolaContainer>
                        <SacolaButton>Finalizar compra</SacolaButton>
                    </SacolaContainer>

                    <SacolaBackground/>
                </>
            }
        </MenuContainer>
    );
}