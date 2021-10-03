import React from "react";
import { Layout, YoutubeVideos } from "@components";
import { Heading, Text } from "@chakra-ui/react";
import data from "@public/videos.json";

const Media: React.FC = () => {
    return (
        <Layout>
            <Heading as="h1" size="3xl" isTruncated>
                Videography
            </Heading>
            {YoutubeVideos([...data.skyfarming_videos, ...data.music_videos])}
            <Heading as="h1" size="3xl" isTruncated>
                Photography
            </Heading>
        </Layout>
    );
};

export default Media;
