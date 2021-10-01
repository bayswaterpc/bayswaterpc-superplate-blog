import React from "react";
import { Layout, ChakraNextImage } from "@components";
import { Heading, Text, Center, Link } from "@chakra-ui/react";

const Media: React.FC = () => {
    return (
        <Layout>
            <Link href="">
                <Heading m={5}>Bevy Egui Playground</Heading>
            </Link>
            <Text m={5}>
                A demo of the multiple Bevy Egui scenes interacting with a Egui
                dialog overlay. Perfect boilerplate for advanced Bevy-Egui
                projects.
            </Text>
            <Center>
                <ChakraNextImage
                    src="/gifs/PaneledPlayground.gif"
                    alt="Point Normal Surface Creation"
                    height={74 / 26}
                    width={1273 / 2}
                />
            </Center>
            <Heading m={5}>Warboss Waaghit</Heading>
            <Text m={5}>
                A Widget withmore Waagh. Speeds up the army setup selection
                process in Total War Warhammer 2. Adds search and win loss
                tracking.
            </Text>
            <Center>
                <ChakraNextImage
                    src="/gifs/WarbossWaaghit.gif"
                    alt="Warboss Waaghit Speed Demo"
                    height={867}
                    width={1243}
                />
            </Center>
        </Layout>
    );
};

export default Media;
