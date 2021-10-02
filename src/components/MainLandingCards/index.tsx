import {
    Box as Container,
    SimpleGrid,
    Text,
    Stack,
    LinkOverlay,
    LinkBox,
    Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChakraNextImage } from "@components";

interface FeatureProps {
    title: string;
    text: string;
    imageUrl: string;
    linkOverlayUrl: string;
    alt: string;
}

const Feature = ({ title, text, imageUrl, linkOverlayUrl }: FeatureProps) => {
    return (
        <LinkBox>
            <NextLink href={linkOverlayUrl} passHref>
                <LinkOverlay>
                    <Stack>
                        <Center>
                            <Text fontWeight={600}>{title}</Text>
                        </Center>
                        <Center>
                            <ChakraNextImage
                                src={imageUrl}
                                height={150}
                                width={300}
                            />
                        </Center>
                        <Center>
                            <Text color={"gray.600"}>{text}</Text>
                        </Center>
                    </Stack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};

export function MainLandingCards() {
    return (
        <Center>
            <Container maxW={1200} paddingBottom={10}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        title={"Technologies"}
                        text={
                            "Preview backend and front end tools I use to deliver performant user expereince."
                        }
                        imageUrl="/images/technologies3.JPG"
                        linkOverlayUrl="/technologies"
                        alt="Technologies"
                    />
                    <Feature
                        title={"Open Source"}
                        text={
                            "MIT licensed projects for learning and giving back to the development community"
                        }
                        imageUrl={"/images/githubflow.png"}
                        linkOverlayUrl="/opensource"
                        alt="Technologies"
                    />
                    <Feature
                        title={"Media"}
                        text={
                            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                        }
                        imageUrl={"/images/overheadBridge3.png"}
                        linkOverlayUrl="/media"
                        alt="Media"
                    />
                </SimpleGrid>
            </Container>
        </Center>
    );
}
