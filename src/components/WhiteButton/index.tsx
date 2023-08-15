import React from "react";
import { WhiteButton } from "./style";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    buttonLabel?: string;
    route: string;
};

function WhiteButtonPressable ( {buttonLabel, route}:ButtonProps ) {
    const navigate = useNavigate();
    return (
            <WhiteButton onClick={ () => navigate(route)}> {buttonLabel} </WhiteButton>
    );
};

export default WhiteButtonPressable;