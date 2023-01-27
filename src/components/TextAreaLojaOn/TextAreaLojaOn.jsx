import React from "react";

import { 
    TextAreaName,
    TextArea,
} from "./styles";

export default function TextAreaLojaOn(params){
    return(
        <div>
            <TextAreaName>{params.text}</TextAreaName>
            <TextArea {...params}/>
        </div>
    );
}