import React from "react";
import { ChakraNextImage } from "@components";
import { Box, Text, Heading, Center, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const OpenSourceSection = () => {
    return (
        <Box m={5}>
            <Center>
                <NextLink href={"https://github.com/bayswaterpc"} passHref>
                    <Link>
                        <Heading as="h1" size="3xl" isTruncated>
                            Open Source
                        </Heading>
                    </Link>
                </NextLink>
            </Center>
            <NextLink
                href={
                    "https://github.com/bayswaterpc/bevy_egui_paneled_playground"
                }
                passHref
            >
                <Link>
                    <Heading>Bevy Egui Playground</Heading>
                </Link>
            </NextLink>
            <Text>
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
                    <Heading>Warboss Waaghit</Heading>
                </Link>
            </NextLink>
            <Text>
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

            <NextLink
                href={"https://github.com/JulianRuiseco/RustyABOS"}
                passHref
            >
                <Link>
                    <Heading>Rusty ABOS</Heading>
                </Link>
            </NextLink>

            <Text>
                A Rust implimentation of A Rust implementation of{" "}
                <NextLink
                    href={
                        "https://www.semanticscholar.org/paper/Art-of-Surface-Interpolation-Dressler/6e33e113f968deb9c07f227333525c59b89f0b26"
                    }
                    passHref
                >
                    <Link color="teal.500" href="#">
                        Averaging Based on Smoothing
                    </Link>
                </NextLink>
                {". "}
                This algorithm is useful for generating realistic surfaces from
                data with sparse and noisy readings.
            </Text>

            <NextLink
                href={
                    "https://github.com/bayswaterpc/bayswaterpc-superplate-blog"
                }
                passHref
            >
                <Link>
                    <Heading>This Site</Heading>
                </Link>
            </NextLink>

            <Text>
                The code for this website is open sourced MIT licensed. See how
                to build and deploy a fully featured media rich website with
                Typescript, React, Chakra UI, and Vercel.
            </Text>
        </Box>
    );
};
