import React from "react";
import {
    Layout,
    ToolChestList,
    OpenSourceSection,
    ProfessionalProjectsSection,
} from "@components";
import { Box } from "@chakra-ui/react";

const TechPage: React.FC = () => {
    return (
        <Layout>
            <Box m={5}>
                <ProfessionalProjectsSection />
                <OpenSourceSection />
                <ToolChestList />
            </Box>
        </Layout>
    );
};

export default TechPage;
