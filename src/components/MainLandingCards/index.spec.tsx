import { render } from "@test";
import { MainLandingCards } from "./index";

describe("Main component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<MainLandingCards />);

        expect(component).toBeTruthy();
    });
});
