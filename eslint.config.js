import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", ".vscode/**", "**/*.svg"] },
  {
    files: ["**/*.js"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm" },
]);