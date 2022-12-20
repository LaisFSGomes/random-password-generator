import React from "react";
import { ButtonWrapper, TextButton } from "./Button.styles";
interface ButtonProps {
  text: string;
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <ButtonWrapper variant="contained" onClick={onClick}>
        <TextButton>{text}</TextButton>
    </ButtonWrapper>
  );
};
