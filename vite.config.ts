import { defineConfig } from "vite"
import swc from "@o.z/vite-plugin-swc"

export default defineConfig({
  plugins: [swc()],
})
