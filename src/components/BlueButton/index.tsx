import React from "react";
import { BlueButton } from "./style";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    buttonLabel?: string;
    route: string;
};

const BlueButtonPressable: React.FC<ButtonProps> = ( {buttonLabel, route} ) => {
    const navigate = useNavigate();
    return (
        <BlueButton onClick={ () => navigate(route)}> {buttonLabel} </BlueButton>
    );
};

export default BlueButtonPressable;