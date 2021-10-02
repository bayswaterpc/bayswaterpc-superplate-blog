import React from "react";
import { Logo } from "@components";
import {
    Center,
    IconButton,
    useColorMode,
    Flex,
    Spacer,
    Box,
    Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const LeftJustified = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";

    return (
        <Flex>
            <IconButton
                aria-label="Color Mode"
                onClick={toggleColorMode}
                icon={isLightMode ? <SunIcon /> : <MoonIcon />}
                mr={5}
            />
        </Flex>
    );
};

export const Header = () => {
    return (
        <Center bg="header.100" data-testid="container">
            <NextLink href={"https://github.com/bayswaterpc"} passHref>
                <Link href={`/`}>
                    <Box>
                        <Logo />
                    </Box>
                </Link>
            </NextLink>
            <Spacer />
            <LeftJustified />
        </Center>
    );
};
