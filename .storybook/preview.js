import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";

// const { addDecorator } = require("@storybook/react");
const { withPropsTable } = require("storybook-addon-react-docgen");

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withPropsTable);
