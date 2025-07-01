import { defineConfig } from "unocss";
import presetWind3 from "@unocss/preset-wind3";
import {
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetWind3(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
