import React, { useEffect, useState } from "react";

import Cookies from 'js-cookie';

import {
    HiOutlineArrowLeft, 
    HiOutlineShoppingBag,
    HiOutlineXMark,
    HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';

import ProdutoSacola from "./ProdutoSacola/ProdutoSacola";

import { 
    MenuContainer,
    Icones,
    SacolaContainer,
    SacolaBackground,
    SacolaText,
    SacolaButton,
    ProdutoSacolaContainer,
    PageText
} from "./styles";

export default function Menu(props){

    const page = props.page;    
    const color =  Cookies.get("color")
    const isMobile = window.screen.width < 800;

    const [isOpen, setIsOpen] = useState(false)
    const [isCliente, setIsCliente] = useState(true)
    const [hideIcon, setHideIcon] = useState(false)
    const [goBack, setGoBack] = useState(false)

    console.log(goBack)
    useEffect(()=>{
        switch(page){
            case 'Cliente':
                setIsCliente(true);
                setGoBack(false);
            break;
            case 'Product':
                setIsCliente(true);
                setGoBack(true);
            break;
            case 'Seus produtos':
                setIsCliente(false);
                setGoBack(false);
            break;
            case 'Configurações':
                setIsCliente(false);
                setHideIcon(true);
                setGoBack(false);
            break;
            default:
        }
    },[page]);

    const handleClick = () =>{
        if(isCliente){
            setIsOpen(!isOpen)
        }else{
            window.location = "/editarperfil"
        }
    }

    return(
        <MenuContainer>

            {(!isCliente || goBack) && 
                <PageText>
                    {goBack ? 
                        isMobile ?
                            <HiOutlineArrowLeft 
                                size={isMobile ? "6.944vw" : "2.5vw"} 
                                color={color ?? "#659BEE"}
                                onClick={()=>window.location = "/"}
                            /> 
                            :
                            <></>
                        : 
                        props.text
                    }
                </PageText>
            }

            {!hideIcon && 
                <Icones onClick={handleClick}>
                    {isCliente ? isOpen ? 
                        <HiOutlineXMark size={isMobile ? "6.944vw" : "2.5vw"} color={color ?? "#659BEE"}/> : 
                        <HiOutlineShoppingBag size={isMobile ? "6.944vw" : "2.5vw"} color={color ?? "#659BEE"}/> : 
                        <HiOutlineWrenchScrewdriver size={isMobile ? "6vw" : "2.5vw"} color={color ?? "#659BEE"}/>
                    }
                </Icones>
            }
            {isOpen && isCliente &&
                <>
                    <SacolaContainer>
                        <SacolaText>Sua sacola</SacolaText>
                        <ProdutoSacolaContainer>
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