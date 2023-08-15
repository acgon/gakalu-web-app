import styled from 'styled-components';
import { global } from '../../globalStyle';

export const LoginDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 100vh;

    background: black;
    color: white;

    align-items: center;

`;

export const LoginContentDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 100vh;
    align-items: center;
    justify-content: center;

`;

export const RightAlignedLink = styled.a `
    text-decoration: none;
    color: ${global.colors.turquesa};

    align-self: flex-end;
    margin: 0 11.77% 0 0;

    font-weight: 400;

    &:hover {
        color: ${global.colors.azulClaro};
        font-weight: 700;
        
    };

`;




