import React from "react";
import { ThemeProvider } from "styled-components";
import { CoolCardProps } from "./CoolCardTypes";
import { CoolCardDiv, CoolCardA } from "./CoolCardStyles";

export const CoolCard: React.FC<CoolCardProps> = (props: CoolCardProps) => {
  const { link, children } = props;

  return (
    <ThemeProvider theme={props}>
      {link ? (
        <CoolCardA href={link} rel="noopener noreferrer" target="_blank">
          {children}
        </CoolCardA>
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
