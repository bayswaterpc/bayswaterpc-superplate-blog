import React from "react";
import { ChakraNextImage } from "@components";
import {
    AspectRatio,
    Box,
    Text,
    Heading,
    SimpleGrid,
    Container,
    Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const CarlsonSoftwareSection = () => {
    return (
        <Box>
            <NextLink href={"https://www.carlsonsw.com/"} passHref>
                <Link>
                    <Heading as="h1" size="3xl" isTruncated>
                        Carlson Software
                    </Heading>
                </Link>
            </NextLink>
            <Text>
                As a Sr. Software Developer at Carlson I deliver full stack
                solutions for the mining and construction industry. I work
                across teams to
            </Text>
            <Heading>Cloud Ops and Blast Ops</Heading>
            <Text>
                Leveraging the power of React, Rust, and C++ I used state of the
                art Machine Vision and 3D collision libraries to deliver
                beautiful, performant, and interactive engineering experience
                for surface generation from scans and drill and blast planning
                in open pit mines.
            </Text>
            <Container maxW={1200} paddingBottom={10}>
                <SimpleGrid minChildWidth="200px" spacing={5} px={10} py={10}>
                    <ChakraNextImage
                        src="/images/technology/pointNormalSurfaceCreation.JPG"
                        alt="Point Normal Surface Creation"
                        height={400}
                        width={600}
                    />
                    <ChakraNextImage
                        src="/images/technology/Voxel.JPG"
                        alt="Volume Voxels"
                        height={400}
                        width={600}
                    />
                    <ChakraNextImage
                        src="/images/technology/aerialCapture.JPG"
                        alt="Aerial Captures"
                        height={400}
                        width={600}
                    />
                </SimpleGrid>
            </Container>
            <Heading>Fix 1 Web UI</Heading>
            <Text>
                Developed and Deployed Machine Vision Algorithms for IOT bulk
                inventory measurement and used React, Node, GraphQL, Oracle DB,
                Cassandra, Docker, Kubernetes to create as‐ sociated web portals
            </Text>
            <Container maxW={1200} paddingBottom={10}>
                <SimpleGrid minChildWidth="200px" spacing={5} px={10} py={10}>
                    <ChakraNextImage
                        src="/images/technology/fix1_pointCloudDataset.JPG"
                        alt="Point Normal Surface Creation"
                        height={400}
                        width={600}
                    />
                    <ChakraNextImage
                        src="/images/technology/Fix1WebUI.JPG"
                        alt="Volume Voxels"
                        height={400}
                        width={600}
                    />
                    <Box>
                        <AspectRatio maxW="605px" ratio={600 / 400}>
                            <iframe
                                data-testid="videoIframe"
                                src={`https://www.youtube.com/embed/ZRpjfMejLzo`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`Carlson Fix1 Scanner`}
                            />
                        </AspectRatio>
                    </Box>
                </SimpleGrid>
            </Container>
            <Heading>Carlson Office Mining</Heading>
            <Text>
                Use QT and C++ geostats engines to deliver Dynamic Mine Planning
                and CAD tooling
            </Text>
        </Box>
    );
};
