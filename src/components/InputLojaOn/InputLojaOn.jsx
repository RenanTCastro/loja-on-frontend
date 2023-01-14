import React from "react";

import { 
    InputName,
    Input
} from "./styles";

export function InputLojaOn(params){
    return(
        <div>
            <InputName>{params.text}</InputName>
            <Input {...params}/>
        </div>
    );
}