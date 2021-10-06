import React from "react";
import {
    Layout,
    CallToActionWithAnnotation,
    MainLandingCards,
} from "@components";

const Home: React.FC = () => {
    return (
        <Layout>
            <CallToActionWithAnnotation />
            <MainLandingCards />
        </Layout>
    );
};

export default Home;
