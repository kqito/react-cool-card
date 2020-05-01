import React from "react";
import { ThemeProvider } from "styled-components";
import { CoolCardAnchorProps } from "./CoolCardTypes";
import { CoolCardAnchor } from "./CoolCardStyled";

const defaultLinkAttrs: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
  style: { cursor: "pointer" },
  rel: "noopener noreferrer",
  target: "_blank"
};

export const CoolCardLink: React.FC<CoolCardAnchorProps> = (
  props: CoolCardAnchorProps
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
      <CoolCardAnchor {...{ ...defaultLinkAttrs, ...rest }}>
        {children}
      </CoolCardAnchor>
    </ThemeProvider>
  );
};

CoolCardLink.defaultProps = {
  backgroundColor: "#ffffff",
  color: "#000000",
  fontSize: "1rem",
  animationDuration: 500,
  width: "400px",
  height: "300px"
};
