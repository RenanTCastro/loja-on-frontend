import React, { useState } from "react";

import api from "../../../services/api";
import Cookies from 'js-cookie'

import Logo from "../../../assets/Logo.svg"

import { 
    ButtonLojaOn, 
    ErrorMessageInput, 
    InputLojaOn 
} from "../../../components";

import { 
    CadastroUsuarioContainer,
    LogoImg,
    Cadastre
} from "./styles";

export default function CadastroUsuario(){
    const [userData, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleInput = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    const handleClick = () =>{
        let validateEmail = /\S+@\S+\.\S+/;
        const email = document.getElementById("email").value;
        console.log(!validateEmail.test(email))

        if(!validateEmail.test(email)){
            setErrorMessage("E-mail inválido");
            setIsError(true);
        }else{
            let maiusculas = /[A-Z]/;
            let minusculas = /[a-z]/; 
            let numeros = /[0-9]/;
            
            const pass = document.getElementById("pass").value;
            const repeatPass = document.getElementById("repeatpass").value;
            
            if(!(pass.length >= 8)){
                setErrorMessage("Senha muito curta.");
                setIsError(true);
            }else{
                if(pass === repeatPass){
                    if(!maiusculas.test(pass) || !minusculas.test(pass) || !numeros.test(pass)){
                        setErrorMessage("A senha deve conter letras maiúsculas, minúsculas e números.");
                        setIsError(true);
                    }else{
                        api.post("/validateemail", {email: email}).then((res)=>{
                            console.log("res, ", res.data)
                            if(!res.data){
                                Cookies.set("email", userData.email);
                                Cookies.set("password", userData.password);
                                window.location="/cadastrarloja";
                                setIsError(false);
                            }else{
                                setErrorMessage("E-mail já existe.");
                                setIsError(true);
                            }
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
                    }
                }else{
                    setErrorMessage("Senhas não coincidem.")
                    setIsError(true)
                }
            }
        }
    }
    
    return(
        <CadastroUsuarioContainer>
            <LogoImg src={Logo}/>
            <InputLojaOn placeholder="Email" type="email" name="email" id="email" onChange={handleInput}/>
            <InputLojaOn id="pass" placeholder="Senha" type="password" name="password" onChange={handleInput}/>
            <InputLojaOn id="repeatpass" placeholder="Repetir senha" type="password" onChange={handleInput}/>
            {isError && <ErrorMessageInput errorMessage={errorMessage}/>}
            <ButtonLojaOn onClick={handleClick} name="Próximo"/>
            <Cadastre onClick={()=>window.location="/login"}>Já tem uma conta? Faça login</Cadastre>
        </CadastroUsuarioContainer>
    );
}