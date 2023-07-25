export default [{
    input: 'modules/index-default.js',
    treeshake: false,
    output: {
        file: 'backbone.js',
        exports: 'default',
        format: 'umd',
        name: 'Backbone',
        amd: {
            id: 'backbone,'
        },
        noConflict: true,
        sourcemap: true,
        sourcemapExcludeSources: true,
    },
}];
