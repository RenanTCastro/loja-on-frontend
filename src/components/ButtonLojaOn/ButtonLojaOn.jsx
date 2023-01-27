import React from "react";

import { 
    ButtonLO
} from "./styles";

export function ButtonLojaOn(params){
    const {name, ...restParams} = params;

    return(
        <ButtonLO {...restParams} >{name} </ButtonLO>
    );
}