import React from "react";
import { render } from "@testing-library/react";
import { CoolCard } from "./CoolCard";
import { CoolCardImage } from "../CoolCardImage";
import { CoolCardText } from "../CoolCardText";
import { CoolCardProps } from "./CoolCardTypes";
import { TestProps } from "../../utils/test/TestProps";

const test: TestProps<CoolCardProps> = {
  link: "link",
  animationDuration: 500,
  color: "#000000",
  fontSize: "1rem",
  backgroundColor: "#000000",
  width: "300px",
  height: "400px",
  children: <></>
};

describe("CoolCard", () => {
  describe("Verify root element by each props", () => {
    it("expect DIV element if not specify 'link' prop", () => {
      const { container } = render(<CoolCard>{test.children}</CoolCard>);

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("DIV");
    });

    it("expect A element if specify 'link' prop", () => {
      const { container } = render(
        <CoolCard link={test.link}>{test.children}</CoolCard>
      );

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("A");
    });
  });
});
