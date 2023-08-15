import { CouponArea, CouponColumn, CouponImg, CouponText, CouponDarkText, HomeDiv, ItemLabel } from "./style";

import HeaderImage from "../../components/HeaderImage";
import WhiteLogo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import couponImg from "../../assets/cupom_icone.png";

export default function Home() {
    return (
        <HomeDiv>
            <HeaderImage/>
            <SearchBar/> <br/>
            <WhiteLogo/> <br/>

            <ItemLabel>Cupons disponíveis</ItemLabel>
            <CouponArea>
                <CouponImg src={couponImg}/>
                <CouponColumn>
                    <CouponText> </CouponText>
                    <CouponText>Frete grátis</CouponText>
                    <CouponDarkText>Ver detalhes...</CouponDarkText>
                </CouponColumn>
            </CouponArea>

            <ItemLabel>Novidades</ItemLabel>
            
        </HomeDiv>
    )
}