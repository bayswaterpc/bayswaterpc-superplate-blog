import { render } from "@test";
import { Layout } from "./index";

describe("Layout Section Not Crashing", () => {
    it("Renders without crashing", () => {
        const component = render(<Layout> {} </Layout>);
        expect(component).toBeTruthy();
    });
});
