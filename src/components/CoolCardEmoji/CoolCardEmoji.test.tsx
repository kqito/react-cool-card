import React from "react";
import "@testing-library/jest-dom";
import { render, getByText } from "@testing-library/react";
import { CoolCardEmoji } from "./CoolCardEmoji";
import { CoolCardEmojiProps } from "./CoolCardEmojiTypes";
import { ExtractPick } from "../../utils/test/TestProps";

const test: ExtractPick<CoolCardEmojiProps, string> = {
  emoji: "😄"
};

const testError: ExtractPick<CoolCardEmojiProps, string> = {
  emoji: "😄😄"
};

describe("CoolCardEmoji", () => {
  describe("Check emoji props", () => {
    it("Expect emoji props to be displayed", () => {
      const { container } = render(<CoolCardEmoji emoji={test.emoji} />);

      expect(getByText(container, test.emoji)).toBeDefined();
    });

    it("Expect wrong emoji props to not be displayed", () => {
      const { container } = render(<CoolCardEmoji emoji={testError.emoji} />);

      expect(container.firstChild).toBeNull();
    });
  });
});
