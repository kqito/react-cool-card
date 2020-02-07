import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, object } from "@storybook/addon-knobs";
import { CoolCard } from "../CoolCard";
import { CoolCardProps } from "../CoolCardTypes";
import mdx from "./CoolCard.mdx";

const TestContents = () => <div>hi</div>;

const defaults: CoolCardProps = {
  image: "/test1.jpg",
  title: "This is a title.",
  imageAlt: "This is a title alt.",
  description: "This is a description.",
  Contents: () => TestContents,
  color: "red",
  size: {
    width: "400px",
    height: "300px"
  },
  expandSize: {
    width: "400px",
    height: "300px"
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
      imageAlt={defaults.imageAlt}
      description={defaults.description}
      Contents={defaults.Contents}
    />
  ));
