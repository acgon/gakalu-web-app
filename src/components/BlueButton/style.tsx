import styled from 'styled-components';
import { global } from '../../globalStyle';

export const BlueButton = styled.button `
    background: ${global.colors.azulClaro};
    color: white;

    outline: none;
    border: none;
    border-radius: 40px;

    font-weight: 500;
    font-size: 16px;
    
    width: 295px;
    height: 48px;
    max-width: 90%;

    margin: 20px 0 0 0;
`;