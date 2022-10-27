import React from "react";

import { 
    ButtonLO
} from "./styles";

export default function ButtonLojaOn(params){
    const {name, colorType = "confirmar", ...restParams} = params;

    return(
        <ButtonLO colorType={colorType} {...restParams} >{name} </ButtonLO>
    );
}