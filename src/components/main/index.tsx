import React from "react";
import { Box, useTheme, useColorMode } from "@chakra-ui/react";

import { Button } from "@components";

export const Main: React.FC = () => {
    const theme = useTheme();
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box bg="main.100" color="white" textAlign="center" py={10}>
            <h1
                data-test="main-heading"
                style={{ fontSize: theme.fontSizes["5xl"] }}
            >
                superplate
            </h1>
            <p style={{ fontSize: theme.fontSizes["lg"] }}>
                The frontend boilerplate with superpowers!
            </p>
            <Button onClick={toggleColorMode} colorScheme="blue" variant="solid" size="md">
                Docs
            </Button>
        </Box>
    );
};
