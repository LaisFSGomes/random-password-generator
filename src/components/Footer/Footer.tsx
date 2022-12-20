import React from "react";
import { FooterWrapper, Title } from "./Footer.styles";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Title> © {currentYear} Todos os direitos reservados. Github: LaisFSGomes</Title>
    </FooterWrapper>
  );
};
