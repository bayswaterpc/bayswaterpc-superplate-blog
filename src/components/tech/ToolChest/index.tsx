import React from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    ListItem,
    UnorderedList,
    Container,
    Center,
    LinkOverlay,
    LinkBox,
    Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChakraNextImage } from "@components";

interface ListCardProps {
    heading: string;
    items: string[];
}

const ListCard = (lcp: ListCardProps) => {
    const listItems = () =>
        lcp.items.map((item) => {
            console.log("hitting?", item);
            return <ListItem>{item}</ListItem>;
        });

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Heading>{lcp.heading}</Heading>
                <UnorderedList>{listItems()}</UnorderedList>
            </Box>
        </Box>
    );
};

const FrontEndList = () => {
    const heading = "Front End";
    const items = [
        "React Native",
        "NextJs",
        "Mobx",
        "AntD",
        "Chakra UI",
        "ThreeJS",
        "Kibana",
        "Egui",
        "Yew",
    ];
    const lcp: ListCardProps = { heading, items };
    return ListCard(lcp);
};

const BackEndList = () => {
    const heading = "Back End";
    const items = [
        "GraphQL",
        "REST",
        "Sqlite",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Planetscale",
        "Axum",
    ];
    const lcp: ListCardProps = { heading, items };
    return ListCard(lcp);
};

const CloudList = () => {
    const heading = "Cloud";
    const items = [
        "Azure",
        "GCP",
        "AWS",
        "Vercel",
        "PostgreSQL",
        "Kubernetes",
        "GKE",
    ];
    const lcp: ListCardProps = { heading, items };
    return ListCard(lcp);
};

const DevOpsList = () => {
    const heading = "Dev Ops";
    const items = [
        "Nx",
        "Bazel",
        "Terraform",
        "Crossplane",
        "Github Actions",
        "Azure Pipelines",
        "Gitlab Pipelines",
    ];
    const lcp: ListCardProps = { heading, items };
    return ListCard(lcp);
};

interface ClickBadgeProps {
    imageUrl: string;
    linkOverlayUrl: string;
    alt: string;
}

const ClickBadge = ({ imageUrl, linkOverlayUrl, alt }: ClickBadgeProps) => {
    return (
        <LinkBox>
            <NextLink href={linkOverlayUrl} passHref>
                <LinkOverlay>
                    <Stack>
                        <Center>
                            <ChakraNextImage
                                src={imageUrl}
                                alt={alt}
                                height={204}
                                width={204}
                            />
                        </Center>
                    </Stack>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    );
};

export const Certifications = () => {
    return (
        <Center>
            <Container maxW={500} paddingBottom={5}>
                <SimpleGrid
                    spacing={10}
                    px={1}
                    py={1}
                    columns={{ base: 1, md: 2 }}
                >
                    <ClickBadge
                        imageUrl="/images/technology/certifications/aws-certified-cloud-practitioner204px.png"
                        linkOverlayUrl="https://www.credly.com/badges/c036bfe0-a755-4223-b35d-9fc2625d21f3/public_url"
                        alt="AWS Certified Cloud Practitioner Badge"
                    />
                    <ClickBadge
                        imageUrl="/images/technology/certifications/kcna-kubernetes-and-cloud-native-associate204px.png"
                        linkOverlayUrl="https://www.credly.com/badges/d2243ea7-6080-4b93-b166-c279db9cae7b/public_url"
                        alt="Kubernetes and Cloud Native Associate Badge"
                    />
                </SimpleGrid>
            </Container>
        </Center>
    );
};

export const ToolChestSection = () => {
    return (
        <Box m={5}>
            <Center>
                <Heading as="h1" size="3xl" isTruncated>
                    Tool Chest
                </Heading>
            </Center>
            <Center>
                <Container maxW={1200} paddingBottom={5}>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                        <FrontEndList />
                        <BackEndList />
                        <CloudList />
                        <DevOpsList />
                    </SimpleGrid>
                </Container>
            </Center>
            <Certifications />
        </Box>
    );
};
