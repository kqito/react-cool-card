import React from "react";
import { CoolCardTextProps } from "./CoolCardTextTypes";
import {
  Text,
  SubTitle,
  Title,
  DescriptionWrapper,
  Description
} from "./CoolCardTextStyles";

export const CoolCardText: React.FC<CoolCardTextProps> = ({
  title,
  description,
  subtitle
}: CoolCardTextProps) => (
  <Text>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
    <Title>{title}</Title>
    <DescriptionWrapper>
      <Description>{description}</Description>
    </DescriptionWrapper>
  </Text>
);

CoolCardText.defaultProps = {
  subtitle: ""
};
