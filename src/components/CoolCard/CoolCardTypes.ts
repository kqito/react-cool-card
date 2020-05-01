import React from "react";

type CoolCardProps = {
  animationDuration?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  width?: string;
  height?: string;
};

export type CoolCardAnchorProps = React.ComponentPropsWithRef<"a"> &
  CoolCardProps;
export type CoolCardDivProps = React.ComponentPropsWithRef<"div"> &
  CoolCardProps;
