import React from "react";
import { ChakraNextImage } from "@components";
import { Box, Text, Heading, Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const OpenSourceSection = () => {
    return (
        <Box>
            <NextLink href={"https://github.com/bayswaterpc"} passHref>
                <Link>
                    <Heading as="h1" size="3xl" isTruncated>
                        Open Source
                    </Heading>
                </Link>
            </NextLink>
            <Text m={5}>Exploring Rust</Text>
            <NextLink
                href={
                    "https://github.com/bayswaterpc/bevy_egui_paneled_playground"
                }
                passHref
            >
                <Link>
                    <Heading m={5}>Bevy Egui Playground</Heading>
                </Link>
            </NextLink>
            <Text m={5}>
                A demo of the multiple Bevy Egui scenes interacting with a Egui
                dialog overlay. Perfect boilerplate for advanced Bevy-Egui
                projects.
            </Text>
            <Center>
                <ChakraNextImage
                    src="/gifs/PaneledPlayground.gif"
                    alt="Point Normal Surface Creation"
                    height={743 / 2}
                    width={1273 / 2}
                />
            </Center>
            <NextLink
                href={"https://github.com/bayswaterpc/WarbossWaaghit"}
                passHref
            >
                <Link>
                    <Heading m={5}>Warboss Waaghit</Heading>
                </Link>
            </NextLink>
            <Text m={5}>
                A Widget withmore Waagh. Speeds up the army setup selection
                process in Total War Warhammer 2. Adds search and win loss
                tracking.
            </Text>
            <Center>
                <ChakraNextImage
                    src="/gifs/WarbossWaaghit.gif"
                    alt="Warboss Waaghit Speed Demo"
                    height={867 / 2}
                    width={1243 / 2}
                />
            </Center>
        </Box>
    );
};
