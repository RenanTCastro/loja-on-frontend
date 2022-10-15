import React from "react";

import Foto from "../../../assets/lojaIcon.png"

import { InputLojaOn, TextAreaLojaOn, ButtonLojaOn } from "../../../components/index";

import { 
    ConfiguracoesContainer,
    ConfiguracoesTexto,
    FotoProduto
} from "./styles";

export default function Configuracoes(){
    return(
        <ConfiguracoesContainer>

            <FotoProduto src={Foto}/>
            <ConfiguracoesTexto>
                Alterar foto de perfil
            </ConfiguracoesTexto>
            
            <div style={{marginBottom: "2.778vw"}}>
                <InputLojaOn placeholder="Nome da loja"/>
                <InputLojaOn placeholder="Whatsapp"/>
                <TextAreaLojaOn rows="5" placeholder="Descrição da loja" />
                <InputLojaOn placeholder="Cor principal"/>
            </div>
            
            <ButtonLojaOn name="Salvar alterações" colorType="confirmar"/>
            <ButtonLojaOn name="Voltar"/>
            <ButtonLojaOn name="Sair da conta" colorType="apagar"/>

        </ConfiguracoesContainer>
    );
}