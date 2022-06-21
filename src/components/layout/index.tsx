import React from "react";
import Head from "next/head";
import { Flex, Spacer } from "@chakra-ui/react";
import { Header, Footer } from "@components";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Bayswater PC</title>
                <meta
                    name="description"
                    content="A portfolio for Jacob Williams and BayswaterPC"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {/*** Function Body ***/}
            <Flex direction="column" minH="100vh">
                <Header />
                <main>{children}</main>
                <Spacer />
                <Footer />
            </Flex>
        </>
    );
}
