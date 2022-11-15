import React from "react";


import {
    Spinner,
    Spinner1,
    Spinner2,
    Spinner3,
    Spinner4
} from "./styles";

export default function LoadingAnimations(){

    return(
        <Spinner>
            <Spinner1/>
            <Spinner2/>
            <Spinner3/>
            <Spinner4/>
        </Spinner>
    );
}