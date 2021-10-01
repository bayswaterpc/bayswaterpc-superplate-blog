import { render } from "@test";

import data from "@public/videos.json";
import { YoutubeVideos } from "./index";

describe("Youtube Video component testing with testing-library", () => {
    it("music videos without crashing", () => {
        console.log(data.music_videos);
        const component = render(YoutubeVideos(data.music_videos));

        expect(component).toBeTruthy();
    });

    it("music videos without crashing", () => {
        console.log(data.music_videos);
        const component = render(YoutubeVideos(data.skyfarming_videos));

        expect(component).toBeTruthy();
    });

    it("sky farming videos correct length ", () => {
        const { getAllByTestId } = render(
            YoutubeVideos(data.skyfarming_videos),
        );

        const cardContainer = getAllByTestId("videoIframe");
        expect(cardContainer).toHaveLength(data.skyfarming_videos.length);
    });

    it("music videos correct length ", () => {
        const { getAllByTestId } = render(
            YoutubeVideos(data.skyfarming_videos),
        );

        const cardContainer = getAllByTestId("videoIframe");
        expect(cardContainer).toHaveLength(data.skyfarming_videos.length);
    });
});
