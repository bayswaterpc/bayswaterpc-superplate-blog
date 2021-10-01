import { render } from "@test";

import data from "@public/meta.json";
import { BlogSection } from "./index";

describe("BlogSection component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<BlogSection />);

        expect(component).toBeTruthy();
    });

    it("BlogSection length must be equal to the length of the meta data ", () => {
        const { getAllByTestId } = render(<BlogSection />);

        const cardContainer = getAllByTestId("container");
        expect(cardContainer).toHaveLength(data.plugins.length);
    });
});
