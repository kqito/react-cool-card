import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, object } from "@storybook/addon-knobs";
import { CoolCard } from "../CoolCard";
import mdx from "./CoolCard.mdx";

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Default", () => (
    <CoolCard
      text={text(
        "Text",
        "This is a text. This is a text. This is a text. This is a text. This is a text."
      )}
      title={text("Title", "This is a title.")}
      image={text("Image", "/test1.jpg")}
    />
  ));
