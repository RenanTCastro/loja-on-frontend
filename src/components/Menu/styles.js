import styled from "styled-components/macro";

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    height: 13.889vw;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
`;

export const IconeSacola = styled.img`
    width: 6.944vw;
    height: 6.944vw;
    margin-right: 8.333vw;
    z-index: 2;
`;

export const SacolaContainer = styled.div`
    position: fixed;
    width: 81.944vw;
    height: 100vh;
    top: 0;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 1;
    text-align: center;
`;

export const SacolaBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background: rgba(0, 0, 0, 0.31);
`;

export const SacolaText = styled.p`
    font-size: 3.889vw;
    font-weight: 600;
    color: #019392;
    text-align: start;
    margin-left: 8.333vw;
    margin-top: 5vw;
`;

export const SacolaButton = styled.button`
    width: 66.667vw;
    height: 11.111vw;
    font-size: 3.889vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  text-align: center;
    background: #019392;
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
`;

export const ProdutoSacolaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 60vh;
    overflow: scroll;
    margin-bottom: 2.778vw;
`;

export const PageText = styled.p`
    position: absolute;
    left: 25px;
    font-size: 3.889vw;
    font-weight: 600;
    color: #019392;
    margin-top: 5vw;
`;