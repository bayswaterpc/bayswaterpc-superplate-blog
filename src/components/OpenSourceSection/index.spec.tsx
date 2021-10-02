import { render } from "@test";
import { OpenSourceSection } from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<OpenSourceSection />);

        expect(component).toBeTruthy();
    });
});
