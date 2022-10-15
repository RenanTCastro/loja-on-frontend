import React from "react";

import { 
    InputLO
} from "./styles";

export default function InputLojaOn(params){

    const {placeholder} = params;

    return(
        <InputLO placeholder={placeholder}/>
    );
}