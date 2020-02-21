import React from "react";
import "@testing-library/jest-dom";
import { render, getByAltText } from "@testing-library/react";
import { CoolCardImage } from "./CoolCardImage";
import { TestProps } from "../../utils/test/TestProps";

type TestImageProps = {
  src: string;
  alt: string;
};

const test: TestProps<TestImageProps> = {
  src: "/test.jpg",
  alt: "test"
};

describe("CoolCardImage", () => {
  describe("Verify each img attributes", () => {
    it("Check src attribute", () => {
      const { container } = render(
        <CoolCardImage src={test.src} alt={test.alt} />
      );

      const Image = getByAltText(container, test.alt);

      expect(Image).toHaveAttribute("src", test.src);
      expect(Image).toHaveAttribute("alt", test.alt);
    });
  });
});
