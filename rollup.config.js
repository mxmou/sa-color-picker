import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/color-picker.js',
  output: [{
    file: 'dist/color-picker-esm.js',
    format: 'esm'
  },
  {
    file: 'dist/color-picker-esm.min.js',
    format: 'esm',
    plugins: [terser()]
  }],
  plugins: [ resolve()]
};
