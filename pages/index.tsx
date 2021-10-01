import React from "react";
import {
    Layout,
    CallToActionWithAnnotation,
    SimpleThreeColumns,
} from "@components";
import { SimpleGrid, Spacer, Center, Box } from "@chakra-ui/react";

const Home: React.FC = () => {
    return (
        <Layout>
            <CallToActionWithAnnotation />
            <SimpleThreeColumns />
        </Layout>
    );
};

export default Home;
