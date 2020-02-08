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
  Contents: () => TestContents,
  imageAlt: "This is a title alt.",
  description: "This is a description.",
  color: "red",
  size: {
    width: "400px",
    height: "300px"
  },
  expandSize: {
    width: "90%",
    height: "90%"
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
      Contents={defaults.Contents}
      imageAlt={defaults.imageAlt}
      description={defaults.description}
      size={defaults.size}
      expandSize={defaults.expandSize}
    />
  ));
