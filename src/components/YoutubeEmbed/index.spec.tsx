import { render } from "@test";

import data from "@public/videos.json";
import { Videos } from "./index";

describe("Cards component testing with testing-library", () => {
    it("music videos without crashing", () => {
        console.log(data.music_videos);
        const component = render(Videos(data.music_videos));

        expect(component).toBeTruthy();
    });

    it("music videos without crashing", () => {
        console.log(data.music_videos);
        const component = render(Videos(data.skyfarming_videos));

        expect(component).toBeTruthy();
    });

    it("sky farming videos correct length ", () => {
        const { getAllByTestId } = render(Videos(data.skyfarming_videos));

        const cardContainer = getAllByTestId("videoIframe");
        expect(cardContainer).toHaveLength(data.skyfarming_videos.length);
    });

    it("music videos correct length ", () => {
        const { getAllByTestId } = render(Videos(data.skyfarming_videos));

        const cardContainer = getAllByTestId("videoIframe");
        expect(cardContainer).toHaveLength(data.skyfarming_videos.length);
    });
});
