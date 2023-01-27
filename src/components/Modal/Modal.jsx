import React from "react";

import { 
    Backdrop,
    ModalContainer,
    Close,
    CloseText
} from "./styles";

export function Modal(props){
    
    return(
      <div>
        <Backdrop onClick={()=>props.setIsModal(!props.isModal)}/>
        <ModalContainer onClick={()=>console.log("aqui")}>
            <Close>
              <CloseText onClick={()=>props.setIsModal(!props.isModal)}>x</CloseText>
            </Close>
            {props.children}
        </ModalContainer>
      </div>
    );
}