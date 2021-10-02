import { render } from "@test";
import { ChakraNextImage } from "./index";

describe("Layout Section Not Crashing", () => {
    it("ChakraNextImage without crashing", () => {
        const component = render(
            <ChakraNextImage
                src="/images/technology/pointNormalSurfaceCreation.JPG"
                alt="Point Normal Surface Creation"
                height={400}
                width={600}
            />,
        );
        expect(component).toBeTruthy();
    });
});
