/* eslint @typescript-eslint/no-explicit-any: 0 */
declare module "*.mdx" {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
