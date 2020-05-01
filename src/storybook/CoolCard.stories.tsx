import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number, object } from "@storybook/addon-knobs";
import { CoolCard, CoolCardLink } from "../components/CoolCard";
import { CoolCardImage } from "../components/CoolCardImage";
import { CoolCardText } from "../components/CoolCardText";
import { CoolCardEmoji } from "../components/CoolCardEmoji";
import mdx from "./CoolCard.mdx";

storiesOf("CoolCard", module)
  .addParameters({
    component: CoolCard,
    docs: { page: mdx }
  })
  .add("Samples", () => (
    <div>
      <CoolCard backgroundColor="#f48fb1" color="#fafafa">
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText
          title="The Corgi is so Cute !!"
          description="It makes me feel appeased..."
        />
      </CoolCard>
      <CoolCard>
        <CoolCardEmoji
          emoji="😄"
          stylesOnHover={{ transform: "rotate(360deg) scale(0.2)" }}
        />
        <CoolCardText
          title="Emoji magic !!!"
          description="Rotateeeeeeeeeeeeee"
        />
      </CoolCard>
      <CoolCardLink
        href="https://github.com/kqito/react-cool-card"
        backgroundColor="#212121"
        color="#ffffff"
        width="800px"
        height="400px"
      >
        <CoolCardImage src="/github.png" alt="corgi" />
        <CoolCardText
          title="Source Code"
          description="React-cool-card was developed by kqito. If you like, please use it !!!"
          subtitle="https://github.com/kqito/react-cool-card"
        />
      </CoolCardLink>
    </div>
  ))
  .add("Emoji", () => (
    <div>
      <CoolCard>
        <CoolCardEmoji emoji="😄" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard>
        <CoolCardEmoji
          emoji="😄"
          styles={object("Custom styles", {
            transform: "rotate(0deg) scale(1.2)"
          })}
          stylesOnHover={object("Custom stylesOnHover", {
            transform: "rotate(360deg) scale(0.2)"
          })}
        />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Link", () => (
    <div>
      <CoolCardLink
        href={text("Default", CoolCardLink.defaultProps?.href ?? "")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCardLink>
      <CoolCardLink
        href={text("Custom", "https://github.com/kqito/react-cool-card")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCardLink>
    </div>
  ))
  .add("Subtitle", () => (
    <div>
      <CoolCard>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText
          title="title"
          description="description"
          subtitle={text("Default", "")}
        />
      </CoolCard>
      <CoolCard>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText
          title="title"
          description="description"
          subtitle={text("Custom", "subtitle")}
        />
      </CoolCard>
    </div>
  ))
  .add("Insert element", () => (
    <div>
      <CoolCard>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText
          title={(
            <>
              <span style={{ color: "blue" }}>hi</span>
              <span style={{ color: "red" }}> !!!</span>
            </>
          )}
          description="description"
        />
      </CoolCard>
    </div>
  ))
  .add("Image", () => (
    <div>
      <CoolCard>
        <CoolCardImage src={text("Custom", "/corgi.jpg")} alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard>
        <CoolCardImage
          src="/fake.jpg"
          alt={text("Custom alt", "This is a alt.")}
        />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Color", () => (
    <div>
      <CoolCard
        backgroundColor={text(
          "Default backgroundColor",
          CoolCard.defaultProps?.backgroundColor ?? ""
        )}
        color={text("Default color", CoolCard.defaultProps?.color ?? "")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard
        backgroundColor={text("Custom backgroundColor1", "#000000")}
        color={text("Custom color1", "#ffffff")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard
        backgroundColor={text("Custom backgroundColor2", "#f48fb1")}
        color={text("Custom color2", "#fafafa")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Animation Duration", () => (
    <div>
      <CoolCard
        animationDuration={number(
          "Default",
          CoolCard.defaultProps?.animationDuration ?? 0
        )}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard animationDuration={number("Custom1", 200)}>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard animationDuration={number("Custom2", 1500)}>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Font size", () => (
    <div>
      <CoolCard
        fontSize={text("Default", CoolCard.defaultProps?.fontSize ?? "")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard fontSize={text("Custom1", "14px")}>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard fontSize={text("Custom2", "20px")}>
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ))
  .add("Size", () => (
    <div>
      <CoolCard
        width={text("Default width", CoolCard.defaultProps?.width ?? "")}
        height={text("Default height", CoolCard.defaultProps?.height ?? "")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard
        width={text("Custom width1", "300px")}
        height={text("Custom height1", "300px")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
      <CoolCard
        width={text("Custom width2", "300px")}
        height={text("Custom height2", "500px")}
      >
        <CoolCardImage src="/corgi.jpg" alt="corgi" />
        <CoolCardText title="title" description="description" />
      </CoolCard>
    </div>
  ));
