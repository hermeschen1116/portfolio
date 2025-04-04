import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import htmx from "./plugins/htmx.ts";

export default defineConfig({
	plugins: [htmx(), tailwind()],
});
