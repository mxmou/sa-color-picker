import Picker from './color-picker';

export default {
  title: 'Color picker',
  component: 'color-picker',
};

const Template = (args) => `<color-picker no_alpha="${args.no_alpha}"></color-picker>`;

export const Primary = Template.bind({});
