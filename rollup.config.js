import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'color-picker.js',
  output: {
    file: 'dist/color-picker-esm.js',
    format: 'esm'
  },
  plugins: [ resolve()]
};
