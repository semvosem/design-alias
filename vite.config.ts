import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/design-alias/", // <- обязательно имя репозитория
  plugins: [react()],
});
