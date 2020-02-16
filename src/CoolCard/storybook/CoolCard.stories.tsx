import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, object } from "@storybook/addon-knobs";
import { CoolCard } from "../CoolCard";
import { CoolCardProps } from "../CoolCardTypes";
import mdx from "./CoolCard.mdx";

const samples: CoolCardProps = {
  image: "/test.jpg",
  title: "This is a title.",
  description: "This is a description.",
  subtitle: "This is a subtitle.",
  link: "https://github.com/kqito/react-cool-card",
  imageAlt: "This is a imageAlt",
  backgroundColor: "#ffffff",
  color: "#000000",
  animationDuration: 500,
  fontSize: "1rem",
  width: "400px",
  height: "300px"
};

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Samples", () => (
    <div style={{ fontSize: "10px" }}>
      <CoolCard
        image="/corgi.jpg"
        title="The Corgi is so Cute !!"
        description="It makes me feel appeased..."
        backgroundColor="#f48fb1"
        color="#fafafa"
      />
      <CoolCard
        image="/github.png"
        title="Source Code"
        description="React-cool-card was developed by kqito. If you like, please use it !!!"
        link={samples.link}
        subtitle={samples.link}
        backgroundColor="#212121"
        color="#ffffff"
        width="800px"
        height="400px"
      />
    </div>
  ))
  .add("Link", () => (
    <CoolCard
      image={samples.image}
      title={samples.title}
      description={samples.description}
      subtitle={samples.subtitle}
      link={text("Link", samples.link)}
    />
  ))
  .add("SubTitle", () => (
    <div>
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={text("Subtitle1", samples.subtitle)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={text("Subtitle2", "OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")}
      />
    </div>
  ))
  .add("Image", () => (
    <div>
      <CoolCard
        image={text("Image1", samples.image)}
        title={samples.title}
        description={samples.description}
      />
      <CoolCard
        image={text("Image3", "fake.jpg")}
        title={samples.title}
        description={samples.description}
        imageAlt={text("ImageAlt3", samples.imageAlt)}
      />
    </div>
  ))
  .add("Color", () => (
    <div>
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        backgroundColor={text(
          "Default background color",
          samples.backgroundColor
        )}
        color={text("Default font color", samples.color)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        backgroundColor={text("Custom background color1", "#212121")}
        color={text("Custom font color1", "#fafafa")}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        backgroundColor={text("Custom background color2", "#f48fb1")}
        color={text("Custom font color2", "#fafafa")}
      />
    </div>
  ))
  .add("Animation Duration", () => (
    <div>
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        animationDuration={number("Default animation duration", 500)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        animationDuration={number("Custom animation duration1", 200)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        animationDuration={number("Custom animation duration2", 2000)}
      />
    </div>
  ))
  .add("Font size", () => (
    <div>
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        fontSize={text("Default font size", samples.fontSize)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        fontSize={text("Custom font size1", "12px")}
      />
    </div>
  ))
  .add("Size", () => (
    <div>
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        width={text("Default Width", samples.width)}
        height={text("Default Height", samples.height)}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        width={text("Custom Width1", "250px")}
        height={text("Custom Height1", "250px")}
      />
      <CoolCard
        image={samples.image}
        title={samples.title}
        description={samples.description}
        subtitle={samples.subtitle}
        width={text("Custom Width2", "300px")}
        height={text("Custom Height3", "400px")}
      />
    </div>
  ));
