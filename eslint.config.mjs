import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "no-console": "off",           // Disables warning for console.log
      "react/prop-types": "off",     // Disables prop-types rule
      // Add more rules here as needed
    },
  },
];

export default eslintConfig;
