import styled from 'styled-components';
import { global } from '../../globalStyle';

export const RegisterDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 100vh;

    background: black;
    color: white;

    align-items: center;
`;

export const RegisterTitle = styled.h1 `
    font-size: 20px;
`;

export const RegisterText = styled.text `
    color: ${global.colors.cinzaMedio};

    & a {
        color: white;
        text-decoration: none;
    };

    & a:hover {
        color: ${global.colors.cinzaClaro};
        font-weight: 700;
    };
`;