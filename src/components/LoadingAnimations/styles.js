import styled from "styled-components/macro";

export const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

export const Spinner1 = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
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