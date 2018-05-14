const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: ["./js/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ],
    },
    devServer: {
        contentBase: [
            __dirname,
            "public",
        ],
    },
};
