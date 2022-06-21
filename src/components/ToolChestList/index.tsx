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
                <ListItem>React Native</ListItem>
                <ListItem>NextJs</ListItem>
                <ListItem>Mobx</ListItem>
                <ListItem>AntD</ListItem>
                <ListItem>Chakra UI</ListItem>
                <ListItem>ThreeJS</ListItem>
                <ListItem>Kibana</ListItem>
                <ListItem>Egui</ListItem>
                <ListItem>Yew</ListItem>
            </UnorderedList>
        </Box>
    );
};

const BackEndList = () => {
    return (
        <Box>
            <Heading>Back End</Heading>
            <UnorderedList>
                <ListItem>GraphQL</ListItem>
                <ListItem>REST</ListItem>
                <ListItem>Sqlite</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>Planetscale</ListItem>
                <ListItem>Axum</ListItem>
            </UnorderedList>
        </Box>
    );
};

const CloudList = () => {
    return (
        <Box>
            <Heading>Cloud</Heading>
            <UnorderedList>
                <ListItem>Azure</ListItem>
                <ListItem>GCP</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>Vercel</ListItem>
                <ListItem>Kubernetes</ListItem>
                <ListItem>GKE</ListItem>
            </UnorderedList>
        </Box>
    );
};

const DevOps = () => {
    return (
        <Box>
            <Heading>Cloud</Heading>
            <UnorderedList>
                <ListItem>Nx</ListItem>
                <ListItem>Bazel</ListItem>
                <ListItem>Terraform</ListItem>
                <ListItem>Crossplane</ListItem>
                <ListItem>Github Actions</ListItem>
                <ListItem>Azure Pipelines</ListItem>
                <ListItem>Gitlab Pipelines</ListItem>
                <ListItem>Terraform</ListItem>
                <ListItem>Crossplane</ListItem>
            </UnorderedList>
        </Box>
    );
};

export const KcnaCerfication = () => {
    return (
        <Box m={5}>
            <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="d2243ea7-6080-4b93-b166-c279db9cae7b"
                data-share-badge-host="https://www.credly.com"
            ></div>
            <script
                type="text/javascript"
                async
                src="//cdn.credly.com/assets/utilities/embed.js"
            ></script>
        </Box>
    );
};

export const AwsCloudPractitioner = () => {
    return (
        <Box m={5}>
            <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="c036bfe0-a755-4223-b35d-9fc2625d21f3"
                data-share-badge-host="https://www.credly.com"
            ></div>
            <script
                type="text/javascript"
                async
                src="//cdn.credly.com/assets/utilities/embed.js"
            ></script>
        </Box>
    );
};

export const Certifications = () => (
    <Center>
        <Container maxW={1200} paddingBottom={10}>
            <Center>
                <Heading>Certifications</Heading>
            </Center>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <KcnaCerfication />
                <AwsCloudPractitioner />
            </SimpleGrid>
        </Container>
    </Center>
);

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
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                        <FrontEndList />
                        <BackEndList />
                        <CloudList />
                        <DevOps />
                    </SimpleGrid>
                </Container>
            </Center>
            <Certifications />
        </Box>
    );
};
