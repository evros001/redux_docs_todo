var webpack = require('webpack');
var path = require('path');
var Clean = require('clean-webpack-plugin');
var entry = "./index.js"
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ENV = process.env.NODE_ENV || "development";
var PRODUCTION = ENV === "production"; //boolean
var publicPath = PRODUCTION ? "/assets/" : "http://localhost:9050/assets/";

module.exports = {
    entry: {
        bundle: PRODUCTION ? entry : [
            entry
        ]
    },
    output: {
        path: path.join(__dirname, "public/assets"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js",
        publicPath: publicPath
    },
    module: {
        loaders: [{
            test: /\.hbs$/,
            loader: 'handlebars',
        }, {
            test: /\.(png|gifv?|jpe?g|svg|jpg)$/,
            exclude: /node_modules/,
            loader: "file?name=img/[name].[ext]"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.(styl|css)$/,
            exclude: /node_modules/,
            loader: PRODUCTION ?
                ExtractTextPlugin.extract("style", "css!stylus") :
                "style!css!stylus"
        }]
    },
    stylus: {
        use: [
            require("nib")(),
            require("rupture")(),
            require("jeet")()
        ]
    },
    babel: {
      stage:0
    },
};
