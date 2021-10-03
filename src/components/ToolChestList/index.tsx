import React from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    ListItem,
    UnorderedList,
    Container,
    Center,
} from "@chakra-ui/react";

const FrontEndList = () => {
    return (
        <Box>
            <Heading>Front End</Heading>
            <UnorderedList>
                <ListItem>React</ListItem>
                <ListItem>React Native</ListItem>
                <ListItem>NextJs</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Mobx</ListItem>
                <ListItem>AntD</ListItem>
                <ListItem>Chakra UI</ListItem>
                <ListItem>ThreeJS</ListItem>
                <ListItem>D3</ListItem>
                <ListItem>Plotly</ListItem>
                <ListItem>Handson Table</ListItem>
                <ListItem>Egui</ListItem>
            </UnorderedList>
        </Box>
    );
};

const BackEndList = () => {
    return (
        <Box>
            <Heading>Back End</Heading>
            <UnorderedList>
                <ListItem>Node</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>NestJs</ListItem>
                <ListItem>Rocket</ListItem>
                <ListItem>Actix</ListItem>
                <ListItem>Flask</ListItem>
                <ListItem>GraphQL</ListItem>
                <ListItem>REST</ListItem>
                <ListItem>Sqlite</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>Cassandra</ListItem>
                <ListItem>Redis</ListItem>
            </UnorderedList>
        </Box>
    );
};

const CloudList = () => {
    return (
        <Box>
            <Heading>Cloud</Heading>
            <UnorderedList>
                <ListItem>AWS-Certified Cloud Practitioner</ListItem>
                <ListItem>Azure</ListItem>
                <ListItem>Vercel</ListItem>
                <ListItem>Docker</ListItem>
                <ListItem>Kubernetes</ListItem>
                <ListItem>Terraform</ListItem>
                <ListItem>Pulumi</ListItem>
                <ListItem>Github Actions</ListItem>
                <ListItem>Azure Pipelines</ListItem>
            </UnorderedList>
        </Box>
    );
};

export const ToolChestList = () => {
    return (
        <Box m={5}>
            <Center>
                <Heading as="h1" size="3xl" isTruncated>
                    Tool Chest
                </Heading>
            </Center>
            <Center>
                <Container maxW={1200} paddingBottom={10}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <FrontEndList />
                        <BackEndList />
                        <CloudList />
                    </SimpleGrid>
                </Container>
            </Center>
        </Box>
    );
};
