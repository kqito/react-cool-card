import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CoolCard } from "../CoolCard";

describe("CoolCard", () => {
  describe("Check Mount length", () => {
    beforeEach(cleanup);
    it("Give all props", () => {
      const { container } = render(
        <CoolCard text="test" title="title" image="test" alt="test" />
      );
      const { children } = container.children[0];
      expect(children).toHaveLength(2);
    });

    it("Give no about image props", () => {
      const { container } = render(<CoolCard text="test" title="title" />);
      const { children } = container.children[0];
      expect(children).toHaveLength(1);
    });

    it("Give no title props", () => {
      const { container } = render(
        <CoolCard text="test" image="test" alt="test" />
      );
      const { children } = container.children[0];
      expect(children).toHaveLength(2);
    });

    it("Give minimum props", () => {
      const { container } = render(<CoolCard text="test" />);
      const { children } = container.children[0];
      expect(children).toHaveLength(1);
    });
  });

  describe("Check css styles", () => {
    it("If cool card is mounted, insert its style tag in head, otherwise remove it", () => {
      const { unmount: unmount1 } = render(<CoolCard text="test" />);
      expect(document.head.childElementCount).toBe(1);

      const { unmount: unmount2 } = render(<CoolCard text="test" />);
      expect(document.head.childElementCount).toBe(1);

      unmount1();
      expect(document.head.childElementCount).toBe(1);

      unmount2();
      expect(document.head.childElementCount).toBe(0);
    });
  });
});
