import { render } from "@test";
import { ProfessionalProjectsSection } from "./index";

describe("ProfessionalProjectsSection Section Not Crashing", () => {
    it("Renders without crashing", () => {
        const component = render(ProfessionalProjectsSection());
        expect(component).toBeTruthy();
    });
});
