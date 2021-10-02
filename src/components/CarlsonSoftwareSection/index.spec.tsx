import { render } from "@test";
import { CarlsonSoftwareSection } from "./index";

describe("CarlsonSoftwareSection Section Not Crashing", () => {
    it("Renders without crashing", () => {
        const component = render(CarlsonSoftwareSection());
        expect(component).toBeTruthy();
    });
});
