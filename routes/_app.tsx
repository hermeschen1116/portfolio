import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ヘルメス Hermes Chen</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://unpkg.com/htmx.org@1.9.2"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
