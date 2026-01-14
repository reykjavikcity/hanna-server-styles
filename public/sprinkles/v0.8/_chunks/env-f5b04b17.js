import { C as Cn } from "./compat.module-8e5010ff.js";
const isPreact = (
  // imported from 'preact'
  "h" in Cn || // imported from 'preact/compat' (has all of `react-dom` bundled)
  "hydrate" in Cn && "render" in Cn || // `undefined` instead of `false` for nicer prop usage
  void 0
);
export {
  isPreact as i
};
