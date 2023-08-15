import styled from "styled-components";
import { global } from "../../globalStyle";

export const InputDiv = styled.div `
    display: flex;
    width: 80%;
    height: 48px;

    margin: 10px;
`;

export const InputArea = styled.input `
    display: flex;
    width: 100%;
    height: 100%;

    padding-left: 10px;
    padding-right: 10px;

    border: none;
    border-radius: 10px;
    outline: none;

    font-size: 16px;
    font-weight: 500;

    background: white;
    color: black;

`;

export const LabelText = styled.p `
    font-size: 16px;
    font-weight: 500;
    
    align-self: flex-start;
    margin: 0 0 0 11.77%;
`;