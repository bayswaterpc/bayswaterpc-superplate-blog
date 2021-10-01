import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Layout, YoutubeVideos } from "@components";
import data from "@public/videos.json";

const Media: React.FC = () => {
    return (
        <Layout>
            {YoutubeVideos(data.music_videos)}
            {YoutubeVideos(data.skyfarming_videos)}
        </Layout>
    );
};

export default Media;
