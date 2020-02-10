import { useState } from "react";

type CoolCardHooks = {
  isExpand: boolean;
  setExpand: (expand: boolean) => void;
};

export function useHooks(): CoolCardHooks {
  const [isExpand, setExpand] = useState<boolean>(false);

  return {
    isExpand,
    setExpand
  };
}

export const isActive = (isExpand: boolean): string =>
  isExpand ? "active" : "";
