import styled from "styled-components/macro";

export const CadastroUsuarioContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 27.778vw 7.5vw 13.889vw 7.5vw;
`;

export const LogoImg = styled.img`
    width: 27.778vw;
    height: 27.778vw;
    margin-bottom: 13.889vw;
`;

export const Cadastre = styled.p`
    font-size: 3.889vw;
    text-align: center;
    color: ${props => props.theme.color};
    cursor: pointer;
    margin-top: 5.556vw;
`;