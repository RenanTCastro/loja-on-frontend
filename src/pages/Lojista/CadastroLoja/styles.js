import styled from "styled-components/macro";

export const CadastroLojaContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 27.778vw 7.5vw 13.889vw 7.5vw;

    @media (min-width: 800px) {
        margin: 5vh 7.5vw 0 7.5vw;
    }
`;

export const LogoImg = styled.img`
    width: 27.778vw;
    height: 27.778vw;
    margin-bottom: 13.889vw;

    @media (min-width: 800px) {
        width: 7.321vw;
        height: 7.321vw;
        margin-bottom: 1.830vw;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.098vw;
`;
