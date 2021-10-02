import React from "react";
import {
    Layout,
    ToolChestList,
    OpenSourceSection,
    CarlsonSoftwareSection,
} from "@components";
import { Box } from "@chakra-ui/react";

const Technologies: React.FC = () => {
    return (
        <Layout>
            <Box m={5}>
                <OpenSourceSection />
                <CarlsonSoftwareSection />
                <ToolChestList />
            </Box>
        </Layout>
    );
};

export default Technologies;
