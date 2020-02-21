import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, object } from "@storybook/addon-knobs";
import { CoolCard } from "../components/CoolCard";
import { CoolCardImage } from "../components/CoolCardImage";
import { CoolCardText } from "../components/CoolCardText";
import mdx from "./CoolCard.mdx";

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Test", () => (
    <div>
      <CoolCard link="https://github.com/kqito">
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Samples", () => (
    <div style={{ fontSize: "10px" }}>
      <CoolCard link="https://github.com/kqito">
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText
          title="title"
          description="description"
          subtitle="subtitle"
        />
      </CoolCard>
    </div>
  ));
