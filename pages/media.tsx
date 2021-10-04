import React from "react";
import { Layout, YoutubeVideos, ReactPhotoGalleryLightbox } from "@components";
import { Heading } from "@chakra-ui/react";
import data from "@public/meta.json";

const Media: React.FC = () => {
    return (
        <Layout>
            <Heading as="h1" size="3xl" isTruncated padding={5}>
                Videography
            </Heading>
            {YoutubeVideos([...data.skyfarming_videos, ...data.music_videos])}
            <Heading as="h1" size="3xl" isTruncated padding={5}>
                Photography
            </Heading>
            {ReactPhotoGalleryLightbox(data.photoGallery)}
        </Layout>
    );
};

export default Media;
