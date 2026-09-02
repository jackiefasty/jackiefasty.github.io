import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Flat ESLint config.
 *
 * `eslint-config-next` v16 publishes native flat config arrays, so they are
 * spread directly rather than bridged through `FlatCompat`.
 */
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
