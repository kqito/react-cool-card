import { ReactElement } from "react";

export type CoolCardTextProps = {
  title: string | ReactElement;
  description: string | ReactElement;
  subtitle?: string | ReactElement;
};
