import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/weather-card.ts',
  output: {
    file: 'dist/weather-card.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
