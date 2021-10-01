import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import data from "@public/meta.json";

export const BlogSection: React.FC = () => {
    return (
        <Box m={5}>
            <Heading my="2">
                Libraries and used in the creation of this website.
            </Heading>
            <SimpleGrid minChildWidth="150px" spacing={10} px={20} py={10}>
                {(data?.plugins ?? []).map((plugin) => (
                    <Box key={plugin.name} data-testid="container">
                        <Heading fontSize={16} fontWeight="500" py={5}>
                            {plugin.name}
                        </Heading>
                        <Text fontSize={14}>{plugin.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};
