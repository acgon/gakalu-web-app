import { RegisterDiv, RegisterText, RegisterTitle } from "./style";

import HeaderImage from "../../components/HeaderImage";
import WhiteLogo from "../../components/Logo";
import { LabelText } from "../../components/InputField/style";
import InputField from "../../components/InputField";
import BlueButtonPressable from "../../components/BlueButton";


export default function Register() {
    return (
        <RegisterDiv>
            <HeaderImage/>
            <WhiteLogo/>

            <RegisterTitle>Criar conta</RegisterTitle>

            <LabelText>Nome de usuário</LabelText>
            <InputField placeholderText="Ex: gamer.hardcore"/>

            <LabelText>Email</LabelText>
            <InputField placeholderText="gamer.hardcore@example.com"/>

            <LabelText>Telefone</LabelText>
            <InputField placeholderText="(00) 91234-5678"/>

            <LabelText>Senha</LabelText>
            <InputField placeholderText="Crie uma senha forte!"/>

            <LabelText>Confirme a senha</LabelText>
            <InputField placeholderText="Digite a senha novamente."/>

            <BlueButtonPressable route="/" buttonLabel="Cadastrar"/>
            <RegisterText>Já possui uma conta? <a href="javascript:history.back()">Login</a></RegisterText>


        </RegisterDiv>
    );
}