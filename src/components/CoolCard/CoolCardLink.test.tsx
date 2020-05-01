import React from "react";
import { render } from "@testing-library/react";
import { CoolCardLink } from "./CoolCardLink";
import { CoolCardAnchorProps } from "./CoolCardTypes";

const test: CoolCardAnchorProps = {
  href: "href",
  animationDuration: 500,
  color: "#000000",
  fontSize: "1rem",
  backgroundColor: "#000000",
  width: "300px",
  height: "400px",
  children: <></>,
  className: "className"
};

describe("CoolCard", () => {
  describe("Verify root element by each props", () => {
    it("expect A element if specify 'link' prop", () => {
      const { container } = render(
        <CoolCardLink href={test.href}>{test.children}</CoolCardLink>
      );

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("A");
    });
  });
});
