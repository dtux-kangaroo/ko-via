import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import { uglify } from "rollup-plugin-uglify";
export default {
    entry: './lib/index.js',
    format: 'umd',
    moduleName: 'rooEcharts',
    plugins: [
        resolve({
            module: true, // ES6模块尽可能使用 ‘module’字段
            jsnext: true,
            main: true,
            namedExports: true,
            modulesOnly: false, // Default: false
        }),
        json(),
        cjs({
            include: 'node_modules/**',
        }),
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [['es2015', { modules: false }], 'stage-0', 'react'],
            plugins: ['external-helpers'],
            runtimeHelpers: true
        }),
        (process.env.NODE_ENV === 'production' && uglify())
    ],
     external: ['lodash', 'immutable'],
     globals: {
         lodash: 'lodash',
         immutable: 'immutable'
     }
}