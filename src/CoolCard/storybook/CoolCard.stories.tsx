import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, object } from "@storybook/addon-knobs";
import { CoolCard } from "../CoolCard";
import { CoolCardProps } from "../CoolCardTypes";
import mdx from "./CoolCard.mdx";

const TestContents = () => <p>hi</p>;

const defaults: CoolCardProps = {
  image: "/test1.jpg",
  title: "This is a title.",
  contents: TestContents(),
  imageAlt: "This is a title alt.",
  description: "This is a description.",
  color: "red",
  size: {
    width: "400px",
    height: "300px"
  },
  expandSize: {
    width: "90vw",
    height: "90vh"
  }
};

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Default", () => (
    <CoolCard
      image={defaults.image}
      title={defaults.title}
      contents={defaults.contents}
    />
  ))
  .add("Test", () => (
    <CoolCard
      image={defaults.image}
      title={defaults.title}
      contents={defaults.contents}
      description={defaults.description}
      expandSize={defaults.expandSize}
    />
  ));
