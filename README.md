# react-cool-card

![build status](https://github.com/kqito/react-cool-card/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/react-cool-card.svg)](https://badge.fury.io/js/react-cool-card)

Simple card component for react.

![Demo](https://user-images.githubusercontent.com/29191111/74602466-100cce00-50ec-11ea-9ab1-0580accd2b75.gif)

## Installation
Your can install the package from npm.
```
npm install react-cool-card
```

## Usage
This is a simple example.

```javascript
import React from "react";
import { CoolCard, CoolCardImage, CoolCardText } from "react-cool-card";

export const Example = () => (
  <CoolCard>
    <CoolCardImage src="/sample.jpg" alt="sample" />
    <CoolCardText
      title="This is a title."
      description="This is a description."
    />
  </CoolCard>
);
```

## Props

### `CoolCard` component
| Property | Type | Default | Description |
|-|:-:|:-:|-|
|link|string \| undefined|""|Go to the link when clicked.
|backgroundColor|string \| undefined|#ffffff|Support hex format.
|color|string \| undefined|#000000|Support hex format.
|animationDuration|number \| undefined|500|Animation duration on mouse hover.
|fontSize|string \| undefined|1rem|The base font size of the component.
|width|string \| undefined|400px|The width of the component.
|height|string \| undefined|300px|The height of the component.


### `CoolCardImage` component
Same as `img` tag


### `CoolCardText` component
| Property | Type | Default | Description |
|-|:-:|:-:|-|
|title|string \| ReactElement|-|The title of the component.
|description|string \| ReactElement|-|The description of the component.
|subtitle|string \| ReactElement \| undefined|""|The subtitle of the component. This appears on mouse hover.

Also, You can check the works with storybook. Please follow the steps below.
1. ```git clone https://github.com/kqito/react-cool-card```
1. ```cd react-cool-card```
1. ```npm install```
1. ```npm run storybook```
1. Go to [http://localhost:6006](http://localhost:6006/)

## License
[MIT © kqito](./LICENSE)
