import React from "react";
import { ThemeProvider } from "styled-components";
import { CoolCardProps } from "./CoolCardTypes";
import {
  CoolCardDiv,
  CoolCardA,
  Image,
  Text,
  SubTitle,
  Title,
  DescriptionWrapper,
  Description
} from "./CoolCardStyles";

export const CoolCard: React.FC<CoolCardProps> = (props: CoolCardProps) => {
  const { image, title, description, subtitle, link, imageAlt } = props;

  const CoolCardContents = (
    <>
      <Image src={image} alt={imageAlt || ""} />
      <Text>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <Title>{title}</Title>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </Text>
    </>
  );

  return (
    <ThemeProvider theme={props}>
      {link ? (
        <CoolCardA href={link} rel="noopener noreferrer" target="_blank">
          {CoolCardContents}
        </CoolCardA>
      ) : (
        <CoolCardDiv>{CoolCardContents}</CoolCardDiv>
      )}
    </ThemeProvider>
  );
};

CoolCard.defaultProps = {
  subtitle: "",
  link: "",
  imageAlt: "",
  backgroundColor: "#ffffff",
  color: "#000000",
  animationDuration: 500,
  width: "400px",
  height: "300px"
};
