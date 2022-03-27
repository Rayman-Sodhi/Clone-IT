import * as React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import "react-datepicker/dist/react-datepicker.css";

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider config={config} isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
