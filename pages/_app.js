import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/turret-road";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          background: "#1E1E1E",
        },
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
