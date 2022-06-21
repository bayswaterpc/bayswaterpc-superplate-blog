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
    Center,
} from "@chakra-ui/react";
import NextLink from "next/link";

const minChildWidth3Clm = 600;
const imageWidth = minChildWidth3Clm * 0.95;
const imageHeight = minChildWidth3Clm / (16 / 9);
const maxContainerWidth = minChildWidth3Clm * 3 + 50;

export const ProfessionalProjectsSection = () => {
    return (
        <Box m={5}>
            <Center>
                <Heading as="h1" size="3xl" paddingBottom={5} isTruncated>
                    Professional Projects
                </Heading>
            </Center>
            {/* {https://www.carlsonsw.com/product/carlson-blastops} */}

            <Heading>Cloud Ops and Blast Ops</Heading>
            <Text>
                Leveraging the power of React, Rust, and C++ I used state of the
                art Machine Vision and 3D collision libraries to deliver
                beautiful, performant, and interactive engineering experience
                for surface generation from scans and drill and blast planning
                in open pit mines.
            </Text>

            <Container maxW={maxContainerWidth}>
                <SimpleGrid
                    spacing={1}
                    px={1}
                    py={1}
                    columns={{ base: 1, md: 3 }}
                >
                    <ChakraNextImage
                        src="/images/technology/pointNormalSurfaceCreation.JPG"
                        alt="Point Normal Surface Creation"
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <ChakraNextImage
                        src="/images/technology/Voxel.JPG"
                        alt="Volume Voxels"
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <ChakraNextImage
                        src="/images/technology/aerialCapture.JPG"
                        alt="Aerial Captures"
                        height={imageHeight}
                        width={imageWidth}
                    />
                </SimpleGrid>
            </Container>

            <Heading>Fix 1 Web UI</Heading>
            <Text>
                Developed and Deployed Machine Vision Algorithms for IOT bulk
                inventory measurement and used React, Node, GraphQL, Oracle DB,
                Cassandra, Docker, Kubernetes to create associated web portals
            </Text>
            <Container maxW={maxContainerWidth} paddingBottom={10}>
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={1}
                    px={1}
                    py={1}
                >
                    <ChakraNextImage
                        src="/images/technology/fix1_pointCloudDataset.JPG"
                        alt="Point Normal Surface Creation"
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <ChakraNextImage
                        src="/images/technology/Fix1WebUI.JPG"
                        alt="Volume Voxels"
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <Box>
                        <AspectRatio
                            maxW={imageWidth}
                            ratio={imageWidth / imageHeight}
                        >
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
                Use QT and C++ geostatistics engines to deliver Dynamic Mine
                Planning and CAD tooling
            </Text>
            <Container maxW={maxContainerWidth} paddingBottom={10}>
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={1}
                    px={1}
                    py={1}
                >
                    <ChakraNextImage
                        src="/images/technology/Kriging-Variogram.jpg"
                        alt="Point Normal Surface Creation"
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <ChakraNextImage
                        src="/images/technology/officeBlockModelAndPit.png"
                        alt="Block Model "
                        height={imageHeight}
                        width={imageWidth}
                    />
                    <ChakraNextImage
                        src="/images/technology/calsScan.gif"
                        alt="Aerial Captures"
                        height={imageHeight}
                        width={imageWidth}
                    />
                </SimpleGrid>
            </Container>
        </Box>
    );
};
