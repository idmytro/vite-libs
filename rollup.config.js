// import vue from 'rollup-plugin-vue';
// import css from 'rollup-plugin-css-only';
// import copy from 'rollup-plugin-copy';
// import postcss from 'rollup-plugin-postcss';
// import postcssImport from 'postcss-import';
// import postcssDiscardComments from 'postcss-discard-comments';
// import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  external: [
    'vue-slider-component'
    // 'vue',
    // 'vue-router',
    // 'vuedraggable/src/vuedraggable',
    // 'element-plus',
    // '@element-plus/icons-vue',
  ],
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'ViteLibs',
      globals: {
        // vue: 'Vue',
        // 'vue-router': 'VueRouter',
        'vue-slider-component': 'vueSliderComponent',
        // 'vuedraggable/src/vuedraggable': 'vuedraggable',
        // 'element-plus': 'ElementPlus',
        // '@element-plus/icons-vue': 'ElementPlusIconsVue',
      },
    },
  ],
  plugins: [
    // copy({
    //   targets: [
    //     { src: ['src/styles/fonts/*'], dest: 'dist/fonts' },
    //   ],
    // }),
    // postcss({
    //   plugins: [
    //     postcssImport,
    //     postcssDiscardComments,
    //     autoprefixer,
    //   ],
    //   extract: true,
    // }),
    // css({ output: '.temp.js' }),
    // vue({ css: false }),
    commonjs({
      requireReturnsDefault: true,
    })
  ],
};
