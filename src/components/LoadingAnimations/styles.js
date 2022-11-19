import styled from "styled-components/macro";

export const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;

    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

export const Spinner1 = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 89px;
    height: 89px;
    margin: 11px;
    border: 8px solid ${props => props.theme.color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.color} transparent transparent transparent;
`;

export const Spinner2 = styled.div`
    animation-delay: -0.45s;
`;

export const Spinner3 = styled.div`
    animation-delay: -0.3s;
`;

export const Spinner4 = styled.div`
    animation-delay: -0.15s;
`;