import styled from "styled-components";

interface IButton {
    variant: "Primary" | "Secondary"
}

export const Button = styled.button<IButton>`
    color: ${(props) => props.variant === 'Primary' ? '#f5f5f5' : '#1c1c1c'};
    background-color: ${props => props.variant === 'Primary' ? '#315C2B' : '#9EA93F'};
    padding: 6px 10px;
    border-radius: 8px;
    border: none;
    display: flex;
    outline: none;
    font-size: 12pt;
    box-shadow: 2px 1px 5px #ffffff;
`;
