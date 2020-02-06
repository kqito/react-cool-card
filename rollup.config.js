import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    }
  ],
  plugins: [
    resolve({
      extensions: [".ts", ".tsx"]
    }),
    postcss({
      extract: true
    }),
    typescript(),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: "node_modules/**"
    })
  ],
  external: [...Object.keys(pkg.devDependencies)]
};
