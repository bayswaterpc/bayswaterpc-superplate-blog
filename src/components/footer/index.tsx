import React, { CSSProperties } from "react";
import { Flex, Center } from "@chakra-ui/react";

import {
    GithubIcon,
    YoutubeIcon,
    LinkedinIcon,
    CvIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "0.25rem",
        marginLeft: "0.25rem",
    };
    return (
        <Center bg="main.100" py={10}>
            <a
                href="https://github.com/pankod"
                target="_blank"
                style={iconStyle}
            >
                <GithubIcon
                    data-test="icon"
                    color="white"
                    width="28"
                    height="29"
                />
            </a>
            <a
                href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                target="_blank"
                style={iconStyle}
            >
                <YoutubeIcon
                    data-test="icon"
                    color="white"
                    width="28"
                    height="29"
                />
            </a>
            <a
                href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                target="_blank"
                style={iconStyle}
            >
                <LinkedinIcon
                    data-test="icon"
                    color="white"
                    width="28"
                    height="32"
                />
            </a>
            <a
                href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                target="_blank"
                style={iconStyle}
            >
                <CvIcon data-test="icon" color="white" width="28" height="32" />
            </a>
        </Center>
    );
};
