import React from "react";

import { 
    InputColor,
    ContainerInputColor
} from "./styles";

export default function InputLojaOn(params){

    return(
        <ContainerInputColor>
            {params.text ? params.text : "Seleciona cor da sua loja" }
            <InputColor 
                type="color" 
                name={params.name} 
                value={params.text ? params.text: "#659BEE" }
                onChange={params.onChange}
            />
        </ContainerInputColor>
    );
}