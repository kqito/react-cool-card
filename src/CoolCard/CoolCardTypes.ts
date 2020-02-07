type Size = {
  width: string;
  height: string;
};

/* eslint @typescript-eslint/no-explicit-any: 0 */
export interface CoolCardProps {
  image: string;
  title: string;
  Contents: (...args: any) => JSX.Element;
  imageAlt?: string;
  description?: string;
  color?: string;
  size?: Size;
  expandSize?: Size;
}