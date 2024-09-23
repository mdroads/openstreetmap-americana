import { hillshadeShadow, hillshadeHighlight } from "../constants/color";

export const hillshading = {
  id: "hillshading",
  type: "hillshade",
  source: "dem",
  layout: {
    visibility: "none",
  },
  paint: {
    "hillshade-exaggeration": [
      "interpolate",
      ["linear"],
      ["zoom"],
      12,
      0.5,
      17,
      0.1,
    ],
    "hillshade-shadow-color": hillshadeShadow,
    "hillshade-highlight-color": hillshadeHighlight,
  },
};
