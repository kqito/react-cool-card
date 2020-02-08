import React from "react";
import { StyleController } from "../utils/StyleController";
import { generateStyled } from "./CoolCardStyles";
import { CoolCardProps } from "./CoolCardTypes";

export const CoolCard: React.FC<CoolCardProps> = (props: CoolCardProps) => {
  const {
    image,
    title,
    imageAlt,
    description,
    Contents,
    color,
    size,
    expandSize
  } = props;

  const {
    CoolCardWrapper,
    Header,
    HeaderImage,
    HeaderText,
    HeaderTitle,
    HeaderDescription,
    ContentWrapper
  } = generateStyled(props);

  return (
    <CoolCardWrapper>
      <Header>
        <HeaderImage
          className="CoolCard-header-image"
          src={image}
          alt={imageAlt || ""}
        />
        <HeaderText>
          <HeaderTitle>{title}</HeaderTitle>
          {description && <HeaderDescription>{description}</HeaderDescription>}
        </HeaderText>
      </Header>
      <ContentWrapper>
        <Contents />
      </ContentWrapper>
    </CoolCardWrapper>
  );
};
