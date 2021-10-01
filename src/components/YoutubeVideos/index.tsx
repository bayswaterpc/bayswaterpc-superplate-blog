import React from "react";
import { SimpleGrid, AspectRatio } from "@chakra-ui/react";

interface YoutubeVideoMeta {
    title: string;
    embedId: string;
}

export const YoutubeVideos = (videos: YoutubeVideoMeta[]) => {
    return (
        <SimpleGrid columns={3} spacing={4} px={2} py={2}>
            {videos.map((video) => (
                <AspectRatio maxW="560px" ratio={840 / 480} key={video.embedId}>
                    <iframe
                        data-testid="videoIframe"
                        src={`https://www.youtube.com/embed/${video.embedId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Embedded Youtube ${video.title}`}
                    />
                </AspectRatio>
            ))}
        </SimpleGrid>
    );
};
