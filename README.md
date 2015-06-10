# About this
 
This is a webpack loader for [**flux-easy**](https://github.com/thr0w/flux-easy)

## Sample webpack.config.js

```javascreipt
module.exports = {
    entry: __dirname + "/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel', 'flux-easy'], // 'jsx?harmony&stripTypes', 'flowcheck'],
                exclude: /node_modules/
            }
    ]
    }
};

```

See https://github.com/thr0w/flux-easy-loader-test example.

# about flux-easy

[Flux](https://facebook.github.io/flux/) applications have a beautiful architecture but a ugly code. [**flux-easy**](https://github.com/thr0w/flux-easy) project proposes a transpiler write a better and simple code that generate it and  additionally facilities using of multiple references to Stores/Views.
