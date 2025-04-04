import { Plugin } from "$fresh/server.ts";

// 利用 import_map 中配置的 htmx，这里直接引用 "htmx" 模块
const main = `data:application/javascript,import "htmx"; export default () => {};`;

export default function htmxPlugin(): Plugin {
	return {
		name: "htmx",
		entrypoints: { main: main },
		render(ctx) {
			ctx.render();
			return {
				scripts: [{ entrypoint: "main", state: [] }],
			};
		},
	};
}
