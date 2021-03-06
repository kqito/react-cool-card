import React from "react";
import { ThemeProvider } from "styled-components";
import { CoolCardDivProps } from "./CoolCardTypes";
import { CoolCardDiv } from "./CoolCardStyled";

export const CoolCard: React.FC<CoolCardDivProps> = (
  props: CoolCardDivProps
) => {
  const {
    children,
    animationDuration,
    backgroundColor,
    color,
    fontSize,
    width,
    height,
    ...rest
  } = props;

  const themeProps = {
    animationDuration,
    backgroundColor,
    color,
    fontSize,
    width,
    height
  };

  return (
    <ThemeProvider theme={themeProps}>
      <CoolCardDiv {...rest}>{children}</CoolCardDiv>
    </ThemeProvider>
  );
};

CoolCard.defaultProps = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontSize: "1rem",
  animationDuration: 500,
  width: "400px",
  height: "300px"
};
