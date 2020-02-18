import React from "react";
import { render } from "@testing-library/react";
import { CoolCard } from "../CoolCard";

const defaults = {
  image: "/test1.jpg",
  title: "title",
  description: "description",
  link: "link",
  subtitle: "subtitle"
};

describe("CoolCard", () => {
  describe("Verify root element by each props", () => {
    it("expect DIV element if not specify 'link' props", () => {
      const { container } = render(
        <CoolCard
          image={defaults.image}
          title={defaults.title}
          description={defaults.description}
          link={defaults.link}
        />
      );

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("A");
    });

    it("expect A element if specify 'link' props", () => {
      const { container } = render(
        <CoolCard image="/test1.jpg" title="title" description="description" />
      );

      const root = container.firstElementChild;
      if (!root) {
        throw new Error();
      }

      expect(root.tagName).toBe("DIV");
    });
  });

  describe("Verify text props", () => {
    it("Verify title, description and subtitle", () => {
      const { container } = render(
        <CoolCard
          image={defaults.image}
          title={defaults.title}
          description={defaults.description}
          subtitle={defaults.subtitle}
        />
      );

      const title = container.querySelector(".CoolCard-text__title");
      if (!title) {
        throw new Error();
      }
      expect(title.innerHTML).toBe(defaults.title);

      const description = container.querySelector(
        ".CoolCard-text__description"
      );
      if (!description) {
        throw new Error();
      }
      expect(description.innerHTML).toBe(defaults.description);

      const subtitle = container.querySelector(".CoolCard-text__subtitle");
      if (!subtitle) {
        throw new Error();
      }
      expect(subtitle.innerHTML).toBe(defaults.subtitle);
    });
  });
});
