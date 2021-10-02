import React from "react";
import {
    Layout,
    CallToActionWithAnnotation,
    MainLandingCards,
} from "@components";
import { SimpleGrid, Spacer, Center, Box } from "@chakra-ui/react";

const Home: React.FC = () => {
    return (
        <Layout>
            <CallToActionWithAnnotation />
            <MainLandingCards />
        </Layout>
    );
};

export default Home;
