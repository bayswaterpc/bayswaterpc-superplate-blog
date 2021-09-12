import * as React from "react";

function SvgCvIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 43.916 43.916"
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            className="cv-icon_svg__svg-inline--fa cv-icon_svg__fa-github cv-icon_svg__fa-w-16"
            {...props}
        >
            <path
                fill="currentcolor"
                d="M34.395 0H9.522a5 5 0 00-5 5v33.916a5 5 0 005 5h24.871a5 5 0 005-5V5a4.999 4.999 0 00-4.998-5zM9.208 16.855c0-1.172.951-2.121 2.121-2.121h.742a4.906 4.906 0 01-1.277-3.304 4.932 4.932 0 019.864.001 4.899 4.899 0 01-1.279 3.303h.709a2.12 2.12 0 012.121 2.121v3.578c0 1.122-.875 2.03-1.975 2.106h-9.051a2.115 2.115 0 01-1.975-2.106v-3.578zm23.5 20.561h-21.5a2 2 0 010-4h21.5a2 2 0 010 4zm0-7.5h-21.5a2 2 0 010-4h21.5a2 2 0 010 4zm0-7.5h-6.5a2 2 0 010-4h6.5a2 2 0 010 4z"
            />
        </svg>
    );
}

export default SvgCvIcon;
