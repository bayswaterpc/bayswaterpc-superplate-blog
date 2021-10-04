import React from "react";
import {
    SimpleGrid,
    AspectRatio,
    Container,
    Center,
    Box,
} from "@chakra-ui/react";

interface YoutubeVideoMeta {
    title: string;
    embedId: string;
}

const minContainerWidth = 450;
const maxContainderWidth = 3 * minContainerWidth + 50;

export const YoutubeVideos = (videos: YoutubeVideoMeta[]) => {
    return (
        <Center>
            <Container maxW={maxContainderWidth} minW={minContainerWidth}>
                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={1}
                    px={1}
                    py={1}
                >
                    {videos.map((video, ii) => (
                        <Box
                            minW={minContainerWidth}
                            maxWidth={minContainerWidth * 1.5}
                            key={`video.embedId_${ii}`}
                        >
                            <AspectRatio ratio={16 / 9} key={video.embedId}>
                                <iframe
                                    data-testid="videoIframe"
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={`Embedded Youtube ${video.title}`}
                                />
                            </AspectRatio>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Center>
    );
};
