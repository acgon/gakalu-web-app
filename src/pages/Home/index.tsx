import { CouponArea, CouponColumn, CouponImg, CouponText, CouponDarkText, HomeDiv, ItemLabel, Carousel, CarouselItem, CarouselImg, CarouselItemText, RightAlignedLink } from "./style";

import HeaderImage from "../../components/HeaderImage";
import WhiteLogo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import couponImg from "../../assets/cupom_icone.png";

import img_sonic from "../../assets/jogos/sonic.png";
import img_double_dragon from "../../assets/jogos/double_dragon.png";
import img_gravity_circuit from "../../assets/jogos/gravity_circuit.png";
import img_armored_core from "../../assets/jogos/armored_core.png";

export default function Home() {
    return (
        <HomeDiv>
            <HeaderImage/>
            <SearchBar/>
            <RightAlignedLink href="#">Carrinho</RightAlignedLink>
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

            <Carousel>

                <CarouselItem>
                    <CarouselImg src={img_sonic}/>
                    <CarouselItemText>Sonic Frontiers</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_double_dragon}/>
                    <CarouselItemText>Double Dragon Gaiden</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_gravity_circuit}/>
                    <CarouselItemText>Gravity Circuit</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_armored_core}/>
                    <CarouselItemText>Armored Core VI</CarouselItemText>
                </CarouselItem>

            </Carousel>

            <ItemLabel>Em alta</ItemLabel>

            <Carousel>

                <CarouselItem>
                    <CarouselImg src={img_sonic}/>
                    <CarouselItemText>Sonic Frontiers</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_double_dragon}/>
                    <CarouselItemText>Double Dragon Gaiden</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_gravity_circuit}/>
                    <CarouselItemText>Gravity Circuit</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_armored_core}/>
                    <CarouselItemText>Armored Core VI</CarouselItemText>
                </CarouselItem>

            </Carousel>

            <ItemLabel>Recomendações</ItemLabel>

            <Carousel>

                <CarouselItem>
                    <CarouselImg src={img_sonic}/>
                    <CarouselItemText>Sonic Frontiers</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_double_dragon}/>
                    <CarouselItemText>Double Dragon Gaiden</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_gravity_circuit}/>
                    <CarouselItemText>Gravity Circuit</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_armored_core}/>
                    <CarouselItemText>Armored Core VI</CarouselItemText>
                </CarouselItem>

            </Carousel>

            <ItemLabel>Outros anúncios</ItemLabel>

            <Carousel>

                <CarouselItem>
                    <CarouselImg src={img_sonic}/>
                    <CarouselItemText>Sonic Frontiers</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_double_dragon}/>
                    <CarouselItemText>Double Dragon Gaiden</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_gravity_circuit}/>
                    <CarouselItemText>Gravity Circuit</CarouselItemText>
                </CarouselItem>

                <CarouselItem>
                    <CarouselImg src={img_armored_core}/>
                    <CarouselItemText>Armored Core VI</CarouselItemText>
                </CarouselItem>

            </Carousel>

        </HomeDiv>
    )
}