const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./client/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./client/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        static: {
            publicPath: "/dist",
            directory: path.resolve(__dirname, "dist"),
        },
        proxy: {
            "/": "http://localhost:3000",
        },
    },
};
