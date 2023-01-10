import React from "react";

import { 
    ErrorMessage
} from "./styles";

export default function ErrorMessageInput(params){
    const {errorMessage, ...restParams} = params;

    return(
        <ErrorMessage {...restParams} >{errorMessage}</ErrorMessage>
    );
}