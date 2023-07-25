import resolve from '@rollup/plugin-node-resolve';

export default [{
    input: 'modules/index-default.js',
    treeshake: false,
    external: [/node_modules/],
    plugins: [
        resolve(),
    ],
    output: {
        file: 'backbone.js',
        exports: 'default',
        format: 'umd',
        name: 'Backbone',
        noConflict: true,
        globals: {
            underscore: '_',
            jquery: 'jQuery || Zepto || ender || $',
            'underscore/modules/extend.js': '_.extend',
        },
        freeze: false,
        strict: false,
        sourcemap: true,
        sourcemapExcludeSources: true,
    },
}];
