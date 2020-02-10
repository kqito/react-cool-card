type Size = {
  width: string;
  height: string;
};

/* eslint @typescript-eslint/no-explicit-any: 0 */
export type CoolCardProps = {
  image: string;
  title: string;
  contents: JSX.Element;
  imageAlt?: string;
  description?: string;
  color?: string;
  size?: Size;
  expandSize?: Size;
};
