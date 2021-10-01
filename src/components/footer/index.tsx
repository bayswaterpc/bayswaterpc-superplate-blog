import React, { CSSProperties } from "react";
import { Center } from "@chakra-ui/react";

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
        <Center bg="main.100" py={10} data-testid="icons-container">
            <a
                href="https://github.com/bayswaterpc"
                data-testid="github-logo"
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
                href="https://www.linkedin.com/in/jmwilliams992/"
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
                href="../../pdf/Jacob_Williams_Resume.pdf"
                target="_blank"
                style={iconStyle}
            >
                <CvIcon data-test="icon" color="white" width="28" height="32" />
            </a>
            <a
                href="https://www.youtube.com/channel/UC2ALMx4DA6CI8pTTHTeiPQw"
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
        </Center>
    );
};
