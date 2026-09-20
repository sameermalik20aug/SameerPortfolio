import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { display, body, mono } from "../styles/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans text-prose text-ink`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
