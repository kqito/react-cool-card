import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, object } from "@storybook/addon-knobs";
import { CoolCard } from "../CoolCard";
import { CoolCardProps } from "../CoolCardTypes";
import mdx from "./CoolCard.mdx";

const defaults: CoolCardProps = {
  image: "/test1.jpg",
  title: "This is a title.",
  description: "This is a description.",
  subtitle: "This is a subtitle.",
  link: "https://github.com/kqito/cool-card",
  imageAlt: "This is a imageAlt",
  backgroundColor: "#ffffff",
  color: "#000000",
  animationDuration: 500,
  width: "400px",
  height: "300px"
};

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Samples", () => (
    <CoolCard
      image={text("Image", defaults.image)}
      title={text("Title", defaults.title)}
      description={text("Description", defaults.description)}
      subtitle={defaults.subtitle}
    />
  ))
  .add("Link", () => (
    <CoolCard
      image={defaults.image}
      title={defaults.title}
      description={defaults.description}
      subtitle={defaults.subtitle}
      link={text("Link", defaults.link)}
    />
  ))
  .add("SubTitle", () => (
    <>
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={text("Subtitle1", defaults.subtitle)}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={text("Subtitle2", "OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")}
      />
    </>
  ))
  .add("Image", () => (
    <>
      <CoolCard
        image={text("Image1", defaults.image)}
        title={defaults.title}
        description={defaults.description}
      />
      <CoolCard
        image={text("Image2", "/test2.jpg")}
        title={defaults.title}
        description={defaults.description}
      />
      <CoolCard
        image={text("Image3", "fake.jpg")}
        title={defaults.title}
        description={defaults.description}
        imageAlt={text("ImageAlt3", defaults.imageAlt)}
      />
    </>
  ))
  .add("Color", () => (
    <>
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        backgroundColor={text(
          "Default background color",
          defaults.backgroundColor
        )}
        color={text("Default font color", defaults.color)}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        backgroundColor={text("Custom background color1", "#212121")}
        color={text("Custom font color1", "#fafafa")}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        backgroundColor={text("Custom background color2", "#f48fb1")}
        color={text("Custom font color2", "#fafafa")}
      />
    </>
  ))
  .add("Animation Duration", () => (
    <>
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        animationDuration={number("Default animation duration", 500)}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        animationDuration={number("Custom animation duration1", 200)}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        animationDuration={number("Custom animation duration2", 2000)}
      />
    </>
  ))
  .add("Size", () => (
    <>
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        width={text("Default Width", defaults.width)}
        height={text("Default Height", defaults.height)}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        width={text("Custom Width1", "400px")}
        height={text("Custom Height1", "400px")}
      />
      <CoolCard
        image={defaults.image}
        title={defaults.title}
        description={defaults.description}
        subtitle={defaults.subtitle}
        width={text("Custom Width2", "300px")}
        height={text("Custom Height3", "400px")}
      />
    </>
  ));
