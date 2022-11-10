import styled from "styled-components/macro";

export const TextAreaLO = styled.textarea`
    width: 85vw;
    border-radius: 1.389vw;
    border: 0.278vw solid ${props => props.theme.color};
    outline: none;
    margin-bottom: 5.556vw;
    padding-left: 2.778vw;
    padding-top: 2.778vw;
    font-size: 3.889vw;
    font-family: 'Montserrat', sans-serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    @media (min-width: 800px) {
        width: 27.818vw;
        height: 3.660vw;
        border-radius: 0.366vw;
        border: 0.073vw solid ${props => props.theme.color};
        font-size: 1.025vw;
        margin-bottom: 1.464vw;
        padding-left: 1.098vw;
        padding-top: 1.098vw;
    }
`;