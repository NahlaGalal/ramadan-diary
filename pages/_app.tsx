import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const colors = {
  brand: {
    main: "#222328",
    white: "#FFFFFF",
    secondary: "#FDAF53",
    background: "rgba(255, 255, 255, 0.3)",
    green: "#1C5C5B",
  },
  theme: {
    checkbox: "#222328",
  },
};

const fonts = {
  body: "Tajawal, sans-serif",
  heading: "Tajawal, sans-serif",
};

const theme = extendTheme({ colors, fonts, direction: "rtl" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>رمضان كريم</title>
      </Head>
      <Box bgColor="brand.main" sx={{ minH: "100vh" }} color="brand.white">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
