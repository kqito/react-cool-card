import React from "react";
import { render } from "@testing-library/react";
import { CoolCard } from "./CoolCard";
import { CoolCardDivProps } from "./CoolCardTypes";

const test: CoolCardDivProps = {
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
    it("should render root DIV element", () => {
      const { container } = render(<CoolCard>{test.children}</CoolCard>);

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("DIV");
    });
  });
});
