import styled from "styled-components/macro";

export const Backdrop = styled.div`    
    background-color:  rgba(0, 0, 0, 0.31);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 3;
`;

export const ModalContainer = styled.div`    
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    position: fixed;
    width: 275px;
    height: auto;
    top: 32vh;
    left: 25px;

    padding: 0 20px 20px 20px;
    z-index: 4;
`;

export const Close = styled.div` 
    display: flex;
    text-align: center;
    width: 100%;
    height: 20px;
    justify-content: end;
    padding: 5px 0 10px 0;
`;

export const CloseText = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: -15px -24px 0 0;
    background-color: ${props => props.theme.color};
    border-radius: 50%;
    color: white;
`;