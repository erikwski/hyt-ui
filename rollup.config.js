import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import css from "rollup-plugin-css-export";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    css(),
    postcss({
      minimize: true,
      modules: true,
    }),
    external(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/env", "@babel/preset-react"],
      extensions: [".js", ".jsx"],
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
