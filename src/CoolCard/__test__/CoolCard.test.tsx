import React from "react";
import { render, cleanup } from "@testing-library/react";
import { CoolCard } from "../CoolCard";

describe("CoolCard", () => {
  describe("Check css styles", () => {
    it("If cool card is mounted, insert its style tag in head, otherwise remove it", () => {
      const { unmount: unmount1 } = render(
        <CoolCard
          image="/test1.jpg"
          title="title"
          Contents={() => <p>test</p>}
        />
      );
      expect(document.head.childElementCount).toBe(1);

      const { unmount: unmount2 } = render(
        <CoolCard
          image="/test1.jpg"
          title="title"
          Contents={() => <p>test</p>}
        />
      );
      expect(document.head.childElementCount).toBe(1);

      unmount1();
      expect(document.head.childElementCount).toBe(1);

      unmount2();
      expect(document.head.childElementCount).toBe(0);
    });
  });
});
