import Picker from './color-picker';
let forLoop = (arr) => {
  let items = [];
  for (let item in arr) {
    if (typeof item != "undefined") {
      items.push(`${item}="${arr[item]}"`);
    }
  }
  return items.join(" ");
};

export default {
  title: 'Color picker',
  component: 'color-picker',
};

const Template = (args) => `<color-picker ${forLoop(args)}></color-picker>`;

export const Primary = Template.bind({});
