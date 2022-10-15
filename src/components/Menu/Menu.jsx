import React, { useState } from "react";

import IconSacola from "../../assets/Sacola.svg"
import IconClose from "../../assets/close.svg"

import ProdutoSacola from "./ProdutoSacola/ProdutoSacola";

import { 
    MenuContainer,
    IconeSacola,
    SacolaContainer,
    SacolaBackground,
    SacolaText,
    SacolaButton,
    ProdutoSacolaContainer
} from "./styles";

export default function Menu(){
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () =>{
        console.log("Clicou!")
    }
    return(
        <MenuContainer>
            <IconeSacola src={isOpen ? IconClose : IconSacola} onClick={()=>setIsOpen(!isOpen)}/>
            {isOpen && 
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