import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: {
    name: "index",
    file: "dist/index.js",
    format: "umd",
    exports: "default",
    compact: true, // build 后代码紧凑
    noConflict: true,
    sourcemap: true,
    sourcemapExcludeSources: true,
    minifyInternalExports: true,
  },
  external: [],
  treeshake: true,
  plugins: [resolve(), commonjs(), json(), babel()],
};
