import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  getByText,
  queryByText,
  getByTestId
} from "@testing-library/react";
import { CoolCardText } from "./CoolCardText";
import { CoolCardTextProps } from "./CoolCardTextTypes";
import { TestProps, ExtractPick } from "../../utils/test/TestProps";

type Props = TestProps<CoolCardTextProps>;

const test: ExtractPick<Props, string> = {
  title: "title",
  description: "description",
  subtitle: "subtitle"
};

describe("CoolCardText", () => {
  describe("Check string props", () => {
    it("Check title, description and subtitle", () => {
      const { container } = render(
        <CoolCardText
          title={test.title}
          description={test.description}
          subtitle={test.subtitle}
        />
      );

      expect(getByText(container, test.title)).toBeDefined();
      expect(getByText(container, test.description)).toBeDefined();
      expect(getByText(container, test.subtitle)).toBeDefined();
    });

    it("Check there is not subtitle if give no subtitle prop", () => {
      const { container } = render(
        <CoolCardText title={test.title} description={test.description} />
      );

      expect(queryByText(container, test.subtitle)).toBeNull();
    });
  });
  describe("Check ReactElement props", () => {
    it("Except to be defined each elements", () => {
      const { container } = render(
        <CoolCardText
          title={<span data-testid={test.title}>{test.title}</span>}
          description={
            <span data-testid={test.description}>{test.description}</span>
          }
          subtitle={<span data-testid={test.subtitle}>{test.subtitle}</span>}
        />
      );

      expect(getByTestId(container, test.title)).toBeDefined();
      expect(getByTestId(container, test.description)).toBeDefined();
      expect(getByTestId(container, test.subtitle)).toBeDefined();
    });
  });
});
