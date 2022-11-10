import styled from "styled-components/macro";

export const ButtonLO = styled.button`
    width: 89vw;
    height: 12vw;
    font-size: 3.889vw;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;  text-align: center;
    background: ${props => props.theme.color};
    color: white;
    border: none;
    border-radius: 1.389vw;
    cursor: pointer;
    margin-bottom: 4.167vw;

    @media (min-width: 800px) {
        width: 29.283vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        font-size: 1.171vw;
        margin-bottom: 0;
    }
`;
