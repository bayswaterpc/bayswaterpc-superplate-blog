import React from "react";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { Hydrate } from "react-query/hydration";
import { RootStoreProvider } from "@mobx";
import mailgo from "mailgo";

const mailgoConfig = {
    dark: true,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
        mailgo(mailgoConfig);
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Hydrate state={pageProps.dehydratedState}>
                <RootStoreProvider>
                    <Component {...pageProps} />
                </RootStoreProvider>
            </Hydrate>
        </ChakraProvider>
    );
}

export default MyApp;
