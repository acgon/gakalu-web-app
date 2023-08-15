import InputField from "../../components/InputField";
import { LoginContentDiv, LoginDiv, RightAlignedLink } from "./style";

import { LabelText } from "../../components/InputField/style";
import BlueButtonPressable from "../../components/BlueButton";
import WhiteButtonPressable from "../../components/WhiteButton";
import HeaderImage from "../../components/HeaderImage";
import WhiteLogo from '../../components/Logo';

export default function Login() {
    return (
        <LoginDiv>
            <HeaderImage/>
            <LoginContentDiv>
                <WhiteLogo/>

                <LabelText>Login</LabelText>
                <InputField placeholderText="Email"/>

                <LabelText>Senha</LabelText>
                <InputField placeholderText="Senha"/>
                <RightAlignedLink href="#">Esqueceu sua senha?</RightAlignedLink>

                <BlueButtonPressable route="/Home" buttonLabel="Login"/>
                <WhiteButtonPressable route="/Register" buttonLabel="Criar conta"/>
            </LoginContentDiv>
        </LoginDiv>
    );
}