import React from "react";
import { ThemeProvider } from "styled-components";
import { StyleController } from "../utils/StyleController";
import { useHooks, isActive } from "./CoolCardHooks";
import { CoolCardProps } from "./CoolCardTypes";
import {
  CoolCardWrapper,
  Header,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  HeaderDescription,
  ContentWrapper
} from "./CoolCardStyles";

export const CoolCard: React.FC<CoolCardProps> = (props: CoolCardProps) => {
  const {
    image,
    title,
    imageAlt,
    description,
    contents,
    color,
    size,
    expandSize
  } = props;

  const { isExpand, setExpand } = useHooks();

  return (
    <ThemeProvider theme={props}>
      <CoolCardWrapper
        className={`CoolCard ${isActive(isExpand)}`}
        onClick={() => setExpand(!isExpand)}
      >
        <Header>
          <HeaderImage
            className="CoolCard-header-image"
            src={image}
            alt={imageAlt || ""}
          />
          <HeaderText>
            <HeaderTitle>{title}</HeaderTitle>
            {description && (
              <HeaderDescription>{description}</HeaderDescription>
            )}
          </HeaderText>
        </Header>
        <ContentWrapper className={`CoolCard ${isActive(isExpand)}`}>
          {contents}
        </ContentWrapper>
      </CoolCardWrapper>
    </ThemeProvider>
  );
};

CoolCard.defaultProps = {
  imageAlt: "",
  description: "",
  color: "red",
  size: {
    width: "400px",
    height: "300px"
  },
  expandSize: {
    width: "100%",
    height: "100%"
  }
};
