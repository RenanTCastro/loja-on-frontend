import React from "react";

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    FinalizarCompraContainer,
    FinalizarCompraTexto,
} from "./styles";

export default function FinalizarCompra(){
    return(
        <FinalizarCompraContainer>
            
            <div style={{marginBottom: "2.778vw"}}>
                <FinalizarCompraTexto>Nome Completo</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>CPF</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Endereço</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Número</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Bairro</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Complemento</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Cidade</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Estado</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>CEP</FinalizarCompraTexto>
                <InputLojaOn/>
                <FinalizarCompraTexto>Observação</FinalizarCompraTexto>
                <TextAreaLojaOn rows="5"/>
            </div>
            
            <ButtonLojaOn name="Enviar pedido"/>
            <ButtonLojaOn name="Voltar"/>

        </FinalizarCompraContainer>
    );
}