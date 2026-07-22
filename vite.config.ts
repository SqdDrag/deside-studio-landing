import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import { sites } from "./build/sites-vite-plugin";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/deside-studio-landing/" : "/",
  plugins: [sites(), cloudflare({ viteEnvironment: { name: "server" } })],
});
