import React from "react";
import { CoolCardImageProps } from "./CoolCardImageTypes";
import { Image } from "./CoolCardImageStyled";

export const CoolCardImage: React.FC<CoolCardImageProps> = ({
  ...attrs
}: CoolCardImageProps) => <Image {...attrs} />;
