import {
    Container,
    SimpleGrid,
    Text,
    Stack,
    LinkOverlay,
    LinkBox,
    Center,
    Heading,
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
                            <Heading fontWeight={600}>{title}</Heading>
                        </Center>
                        <Center>
                            <ChakraNextImage
                                src={imageUrl}
                                height={300}
                                width={900}
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
            <Container maxW={1200} paddingBottom={9}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Feature
                        title={"Tech"}
                        text={
                            "Past projects and tech I use to deliver performant user expereinces."
                        }
                        imageUrl="/images/technologies3.JPG"
                        linkOverlayUrl="/technologies"
                        alt="Technologies"
                    />
                    <Feature
                        title={"Media"}
                        text={
                            "Videography, photography, timelapses, and music videos I've produced and worked on"
                        }
                        imageUrl={"/images/overheadBridge2.png"}
                        linkOverlayUrl="/media"
                        alt="Media"
                    />
                </SimpleGrid>
            </Container>
        </Center>
    );
}
