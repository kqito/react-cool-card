import React from "react";
import { CoolCardImageProps } from "./CoolCardImageTypes";
import { Image } from "./CoolCardImageStyles";

export const CoolCardImage: React.FC<CoolCardImageProps> = ({
  ...attrs
}: CoolCardImageProps) => <Image {...attrs} />;
