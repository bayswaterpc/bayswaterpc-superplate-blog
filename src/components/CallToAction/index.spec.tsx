import { render } from "@test";
import { CallToActionWithAnnotation } from "./index";

describe("Call to action renders", () => {
    it("Renders without crashing", () => {
        const component = render(<CallToActionWithAnnotation />);
        expect(component).toBeTruthy();
    });
});
