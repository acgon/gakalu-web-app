import React from "react";
import { InputArea, InputDiv } from "./style";

interface InputFieldProps {
    placeholderText?: string;
};

 const InputField: React.FC<InputFieldProps> = ( {placeholderText} ) => {
    return (
        <InputDiv>
            <InputArea placeholder = {placeholderText} />
        </InputDiv>
    );
}; 

export default InputField;

