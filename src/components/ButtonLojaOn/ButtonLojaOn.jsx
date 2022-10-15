import React from "react";

import { 
    ButtonLO
} from "./styles";

export default function ButtonLojaOn(params){

    const {name, colorType = "confirmar"} = params;

    return(
        <ButtonLO colorType={colorType}>{name}</ButtonLO>
    );
}