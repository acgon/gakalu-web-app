import styled from 'styled-components';
import { global } from '../../globalStyle';

export const HomeDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 100%;
    overflow-y: auto;

    background: black;
    color: white;

    align-items: center;

`;

export const RightAlignedLink = styled.a `
    text-decoration: none;
    color: white;

    align-self: flex-end;
    margin: 5px 5% 0 0;

    font-weight: 400;
    font-size: 20px;

    &:hover {
        color: ${global.colors.turquesa};
        font-weight: 700;
        
    };
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

export const Carousel = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
        background: ${global.colors.cinzaEscuro};
    }
`;

export const CarouselItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 0 20px;
`;

export const CarouselImg = styled.img `
    width: 93px;
    height: 93px;
`;

export const CarouselItemText = styled.text `
    font-weight: 300;
    font-size: 12px;
`;