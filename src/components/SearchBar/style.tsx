import styled from 'styled-components';
import { global } from '../../globalStyle';

export const SearchBarDiv = styled.div `
    display: flex;
    width: 95%;
    height: 37px;

`;

export const SearchBar = styled.input `
    display: flex;
    width: 100%;
    height: 100%;

    padding-left: 15px;
    padding-right: 15px;

    border: none;
    border-radius: 50px;
    outline: none;

    font-size: 20px;
    font-weight: 500;

    background: white;
    color: black;
`;
