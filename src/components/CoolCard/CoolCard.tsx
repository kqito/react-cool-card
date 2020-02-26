import React from "react";
import { ThemeProvider } from "styled-components";
import { CoolCardProps } from "./CoolCardTypes";
import { CoolCardDiv, linkAttrs } from "./CoolCardStyled";

export const CoolCard: React.FC<CoolCardProps> = (props: CoolCardProps) => {
  const { link, children } = props;

  return (
    <ThemeProvider theme={props}>
      {link ? (
        <CoolCardDiv as="a" href={link} {...linkAttrs}>
          {children}
        </CoolCardDiv>
      ) : (
        <CoolCardDiv>{children}</CoolCardDiv>
      )}
    </ThemeProvider>
  );
};

CoolCard.defaultProps = {
  link: "",
  backgroundColor: "#ffffff",
  color: "#000000",
  fontSize: "1rem",
  animationDuration: 500,
  width: "400px",
  height: "300px"
};
