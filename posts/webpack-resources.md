---
title: webpack and babel resources
description: webpack resources.
date: dec 21, 2020
updatedOn : Mar 21, 2022
coverImage: /images/post/webpack.jpeg
tags:  webpack, babel
---

#### what is web
webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph that maps every module your project needs and generates one or more bundles.
 
it will bundle your assets and manage the dependency of the project, if you do not use webpack, you have to include script tag and order of the script tag you have to manage by yourself and that will not be sustainable.

just refer this [video](https://youtu.be/TzdEpgONurw) another good [Video tutorial](https://youtu.be/yiwSVeHYosQ)

for further reading refer [docs](https://webpack.js.org/concepts/)

demo config file

```go
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
```
####  [Authoring library](https://webpack.js.org/guides/author-libraries/#expose-the-library)

we need to expose exports from the entry point through output. library option.

#### [Asset managment ](https://webpack.js.org/guides/asset-management/#setup)

Open up dist/index.html in your browser again and you should see that Hello webpack is now styled in red. To see what the webpack did, inspect the page (don't view the page source, as it won't show you the result, because the style tag is dynamically created by JavaScript) and look at the page's head tags. It should contain the style block that we imported in index.js.


## Babel

__why we need babel__ : arrow function come in ES6 and all browser do not understand this syntext, So you need tool to compile this file to ES5 that is what babel do.

__Babel use babylon parse to create AST that transform that to ES5__

it is a built-on plugin system, babel is just a Babylon parser that you need a plugin for each feature that does the job of transformation. So you have to add lots of plugins to do a simple tasks, for this babel give the feature of __preset__ that is a group of babel plugin. 

these are some famouse presets

1. @babel/preset-env for compiling ES2015+ syntax

2. @babel/preset-typescript for TypeScript

3. @babel/preset-react for React

4. @babel/preset-flow for Flow

you read about them on [here](https://babeljs.io/docs/en/presets).

### polyfill

In web development, a polyfill is code that implements a feature on web browsers that do not support the feature. Most often, it refers to a JavaScript library that implements an HTML5 or CSS web standard, either an established standard (supported by some browsers) on older browsers, or a proposed standard (not supported by any browsers) on existing browsers. Formally, "a polyfill is a shim for a browser API"

So we will mainlly use @babel/preset-env that will install plugin as per target and that is very efficient.

### Babel & Webpack

So webpack can take all files like CSS, png etc all file has loader so webpack add those into a bundle so in js file we will use loader call __babel-loader__ to compile our js file with babel then webpack add those into the bundle. that is how web pack and babel work together.