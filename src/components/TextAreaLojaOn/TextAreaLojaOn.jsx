import React from "react";

import { 
    TextAreaLO
} from "./styles";

export default function TextAreaLojaOn(params){

    const {rows = 5, placeholder} = params;

    return(
        <TextAreaLO placeholder = {placeholder} rows={rows} {...params}/>
    );
}