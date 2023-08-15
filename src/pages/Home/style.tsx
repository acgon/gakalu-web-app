import styled from 'styled-components';
import { global } from '../../globalStyle';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 100vh;

    background: black;
    color: white;

    align-items: center;

`;

export const ItemLabel = styled.h1 `
    font-size: 20px;
    align-self: flex-start;

    margin: 0 10px 0 10px;

`;

export const CouponArea = styled.div `
    display: flex;
    align-self: flex-start;
    flex-direction: row;
    justify-content: space-between;
`;

export const CouponColumn = styled.div `
    display: flex;
    flex-direction: column;
`;

export const CouponImg = styled.img `
    display: flex;
    align-self: flex-start;

    width: 87px;
    height: 87px;
`;

export const CouponText = styled.text `
    color: white;
    font-size: 16px;
    
`;

export const CouponDarkText = styled.text `
    color: ${global.colors.cinzaMedio};
    font-size: 16px;
`;