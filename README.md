# react-cool-card

Simple card component for react.

## Installation
Your can install the package from npm.
```
npm install react-cool-card
```

## Usage
This is a simple example.

```javascript
import React from "react";
import CoolCard from "react-cool-card";

export const Example = () => (
  <CoolCard
    image="/example.jpg"
    title="This is a title."
    description="This is a description."
    subtitle="This is a subtitle."
  />
);
```

## Props
| Property | Type | Default | Description |
|-|:-:|:-:|-|
|image|string|-|The image of the component
|title|string|-|The title of the component
|description|string|-|The description of the component
|subtitle|string|""|The subtitle of the component
|link|string \| undefined|""|Go to the link when clicked
|imageAlt|string \| undefined|""|The alt attribute of the `image` props
|backgroundColor|string \| undefined|#ffffff|Can be a hex. 
|color|string \| undefined|#000000|Can be a hex. 
|animationDuration|number \| undefined|500|Animation duration on mouse hover.
|width|string \| undefined|400px|The width of the component
|height|string \| undefined|300px|The height of the component

Also, You can check the works with storybook. Please follow the steps below.
1. ```git clone https://github.com/kqito/react-cool-card```
1. ```cd react-cool-card```
1. ```npm install```
1. ```npm run storybook```
1. Go to [http://localhost:6006](http://localhost:6006/)

## License
[MIT © kqito](./LICENSE)
