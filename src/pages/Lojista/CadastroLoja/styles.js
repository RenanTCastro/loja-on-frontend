import styled from "styled-components/macro";

export const CadastroLojaContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 27.778vw 7.5vw 13.889vw 7.5vw;

    @media (min-width: 800px) {
        margin: 15vh 7.5vw 15vh 7.5vw;
    }
`;

export const LogoImg = styled.img`
    width: 33.333vw;
    height: 33.333vw;
    border-radius: 50%;

    @media (min-width: 800px) {
        width: 7.321vw;
        height: 7.321vw;
    }
`;

export const AlterarFoto = styled.label`
    font-size: 4.444vw;
    font-weight: 400;
    color: ${props => props.theme.color};
    text-align: center;
    margin: 5.556vw 0 5.556vw 0;
    cursor: pointer;

    @media (min-width: 800px) {
        font-size: 1.186vw;
        margin: 1.853vw;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.098vw;
`;

export const ContainerInputColor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 84vw;
    height: 11.111vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    margin-bottom: 5.556vw;
    padding-right: 1.389vw;
    padding-left: 2.778vw;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    @media (min-width: 800px) {
        width: 27.818vw;
        height: 3.660vw;
        font-size: 1.025vw;
        border-radius: 0.366vw;
        border: 0.073vw solid ${props => props.theme.color};
    }
`;
export const InputColor = styled.input`
    width: 9.722vw;
    height: 9.722vw;    
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 1.389vw;
    background-color: transparent;

    @media (min-width: 800px) {
        width: 35px;
        height: 35px;
        border: 0.073vw solid ${props => props.theme.color};
        border-radius: 5px;
        font-size: 1.025vw;
    }

    &::-webkit-color-swatch{
        border: none;
        border-radius: 0.366vw;
    }
`;
