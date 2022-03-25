import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    main: "#222328",
    white: "#FFFFFF",
    secondary: "#FDAF53",
    background: "rgba(255, 255, 255, 0.3)",
    green: "#1C5C5B",
  },
};

const fonts = {
  body: "Tajawal, sans-serif",
  heading: "Tajawal, sans-serif",
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
