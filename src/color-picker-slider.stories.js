import Picker from "./color-picker-slider";
let forLoop = (arr) => {
  let items = [];
  for (let item in arr) {
    if (typeof item != "undefined") {
      items.push(`${item}="${item}"`);
    }
  }
  return items.join(" ");
};

export default {
  title: "Color picker slider",
  component: "color-picker-slider",
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
      ],
    },
  },
};

const Template = (args) =>
  `<color-picker-slider ${forLoop(args)}></color-picker-slider>`;

export const Primary = Template.bind({});
