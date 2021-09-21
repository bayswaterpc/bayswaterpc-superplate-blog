import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer, Videos } from "@components";
import data from "@public/videos.json";

const Home: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Header />
            <Main />
            {Videos(data.music_videos)}
            {Videos(data.skyfarming_videos)}
            <Cards />
            <Spacer />
            <Footer />
        </Flex>
    );
};

export default Home;
