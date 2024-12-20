import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-stone-100 text-gray-800 selection:bg-hazel-500/40 h-screen mx-auto transition-all antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
