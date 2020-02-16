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
      <Image className="CoolCard-image" src={image} alt={imageAlt || ""} />
      <Text className="CoolCard-text">
        {subtitle && (
          <SubTitle className="CoolCard-text__subtitle">{subtitle}</SubTitle>
        )}
        <Title className="CoolCard-text__title">{title}</Title>
        <DescriptionWrapper>
          <Description className="CoolCard-text__description">
            {description}
          </Description>
        </DescriptionWrapper>
      </Text>
    </>
  );

  return (
    <ThemeProvider theme={props}>
      {link ? (
        <CoolCardA
          className="CoolCard"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {CoolCardContents}
        </CoolCardA>
      ) : (
        <CoolCardDiv className="CoolCard">{CoolCardContents}</CoolCardDiv>
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
  fontSize: "1rem",
  width: "400px",
  height: "300px"
};
