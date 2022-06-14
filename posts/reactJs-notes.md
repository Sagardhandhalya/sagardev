---
title: React JS notes
description: This contain some CSS concept that you have to know. CSS specificity.
date: June 22, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/react.png
tags: CSS, SCSS
---

## Set up React from scratch---!!

### 1. Basic React app with TypeScript and web pack 5

1.1. create .gitignore , build and src folder

1.2. create new node project and git repo
 ```js
          npm init -y
           git init
```

1.3 create index.html file. add div with id app. add node_module to .gitignore

1.4 npm i react react-dom

1.5 for the typescript support npm i  -D typescript @types/react @types/react-dom

1.6 add type script config file.create tsconfig.json add this.
```json
{
  "compilerOptions": {
    "target": "ES5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "ESNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */ /* Type declaration files to be included in compilation. */,
    "lib": [
      "DOM",
      "ESNext"
    ] /* Specify library files to be included in the compilation. */,
    "jsx": "react-jsx" /* Specify JSX code generation: 'preserve', 'react-native', 'react' or 'react-jsx'. */,
    "noEmit": true /* Do not emit outputs. */,
    "isolatedModules": true /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */,
    "resolveJsonModule": true
    // "allowJs": true /* Allow javascript files to be compiled. Useful when migrating JS to TS */,
    // "checkJs": true /* Report errors in .js files. Works in tandem with allowJs. */,
  },
  "include": ["src/**/*"]
}
```

1.7 in src create App.tsx return h1 tag, create index.tsx in src.

1.8 install babel with this presets
```js
 npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```
create .babelrc file add this content.
```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

1.9  Adding webpack in the project 
```js
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader
```
 
Add webpack folder and in there add webpack.config.js file and add this config.
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ]
}
```
1.10 add serve script in packag.json 
```js
"start":"webpack serve --config webpack/webpack.config.js --open"
```


### 2. Image and SVG

--- css file
We added babel-loader that teach webpack how to deal with TSX and ts file now we need to add loader for CSS and SVG do webpack can add those file into the bundle. So let add a loader for the CSS.

```js
npm i -D style-loader css-loader
```

For sass support use 
```js 
npm install sass-loader sass --save-dev
```

and add this rule.
{
        test: /\.(css|scss)$/,
        use: ['style-loader','css-loader','sass-loader'],
}

Now you can import CSS file into your component.

--- png git ico jpeg file

there is built-in support for all these file in webpack 5 you just have to add this file.
```js
{
test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
type : 'asset/resource'
}
```

---- SVG files
In webpack 4 you need to add a package for SVG but in webpack 5 you can use built in type asset/inline, for font also we can use this type add this rule.

```js
test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
type : 'asset/inline'
```

__Announcement : Typescript will give error when you error when you import svg or png file so do solve it add a file in src folder custom.d.ts__ content  of the file will be

```js
declare module '*.svg'
declare module '*.png'
```

### 3. add multiple environments for dev and prod

We will create 4 files in the webpack folder.

1. webpack.common.js: this file will contain common configuration which is same in production and development environment.we will export this object.

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  mode:"development",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader','css-loader','sass-loader'],
      }
      ,{
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type : 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type : 'asset/inline'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ]
}
```
2. webpack.prod.js: this file will contain production environ specific config exp mode, source map etc.
```js
module.exports ={
    mode:"production",
}
```

3. webpack.dev.js: this file will contain development environ specific config exp mode, source map etc.
```js
module.exports ={
    mode:"development",
    devtool:"cheap-module-source-map"
}
```
4. webpack.config.js: we will export a function from this file that will check what is environment is pass from the script dev or prod according to that import that file's configuration. also import common configurations from the webpack.common.js Merge them with the [merge function](https://www.npmjs.com/package/webpack-merge) from the webpack-merge. and export the result.

```js
const {merge} = require('webpack-merge')
const commonConfig = require("./webpack.common.js")

module.exports = (vars) =>{
const {env} = vars
const envConfig = require(`./webpack.${env}.js`)
const config = merge(commonConfig,envConfig)
return config
}
```

To add env script 

```js
"scripts": {
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open",
    "build": "webpack build --config webpack/webpack.config.js --env env=prod"
  },
```

https://webpack.js.org/configuration/dev-server/#root

### 4. Add react refresh

When you have button counter on the page and you click it 5 times so the value of counter will be 5, now if you update some other component and save webpack will re-render whole app so the state of your counter will not be preserved and so the counter will 0,this makes debuging hard. react has pkg to fix this problem called __react refresh__.

to add it do this changes, 
```js
npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

### 5. Linting Es Lint
These are the plugin you need to add Eslint with typescript in the project. install [this](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) vscode extention.

```js
npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y


```

after all this  pkg is installed we can add .eslintrc.js file in root of the project and define the configuration in that file.

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
```

you can also add linting script 
```js
    "lint": "eslint --fix \"./src/**/**.{js,jsx,ts,tsx,json}\""

```

### 6. Code formatting  prettier

To Add prettier install this pkg with command
```js
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```
add .prettierrc.js file in the root of the project.

```js
module.exports = {
    semi: false,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
    endOfLine: 'auto',
}
```

install [this](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension and on formate on save setting in vscode.

### 7. Set testing with jest

install this pkgs to run test

```js
npm i -D  jest babel-jest react-test-renderer
```
we need babel jest to compile test file in lower version of java script and jest is core library and react test render is for snapshot render.

For dom testing, we need to add some react testing library utility

```js
npm i -D @testing-library/react
```
to write in test in the type script we need ts-jest pkg.added jest.config.js to change environment .ts extention.

```js
npm i -D ts-jest
```

### 7. Add routing

```js
npm i react-router react-router-dom
```

## React router - React - Redux Begin Again

## 1. React Router Dom

1.1  Animated Transition , read about CSSTransition[react-transition-group]

1.2 MemoryRouter

1.3 Warning: <Route children> takes precedence over both <Route component> and <Route render> so don’t use more than one in the same <Route>.

1.4. React memo vs usememo vs usecallback : [video](https://www.youtube.com/watch?v=uojLJFt9SzY&ab_channel=CodingWithChaim)

### 1.5  hooks are ways to share non-visual logic in the react application.



## 2. React
   2.1. SyntheticEvent

    - you cannot return false to prevent default behaviour in React. You must call preventDefault explicitly.
    
     - Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value 
          but the input is still editable, you may have accidentally set value to undefined or null.

    - https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

   - Changing the value of defaultValue attribute after a component has mounted will not cause any update of the value in the DOM.

   - In React, an input type="file" is always an uncontrolled component because its value can only be set by a user, and not programmatically

# Consepts

### Reading Advance concept tab from React Docs


#### 1.  [Code Splitting](https://reactjs.org/docs/code-splitting.html) :

 - First thing a bundler do is resolve import it will replace import with the code from other file, and in this process bundle can be too large and app will take time to load so solve this problem bundle provide lazy loading feature.
     - React Lazy
     - Dynamic import 
    
- Now we can load component lazy you can add a __Suspense__ component and when user click the link this component will show up as __fallback__  then it will load your component lazy. if react fail in loading component it will show __ErrorBoundary__ .

    - Route based Code splitting :
       -  Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time. Take look at example with react router :

 React.lazy currently only supports default exports.


 ```c++
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

#### 2.  [Context](https://reactjs.org/docs/context.html) :
#### 3.[Error Boundaries](https://reactjs.org/docs/error-boundaries.html)


Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

Error boundaries do not catch errors inside event,no need for that if error in event hander react will display old state.



## Ecommerce Project 

https://dev.to/burhanuday/react-context-api-usereducer-redux-ogo
https://reactrouter.com/web/guides/quick-start

# React library 

### Framer motion

``` npm install framer-motion```

```js

import { motion } from 'framer-motion'

 <motion.div
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        type: 'spring',
      }}
      className="home__container"
    >
      <div className="home__right">
        <h2 className="title">
          Save All your Snippets at one place from multiple language, Keep
          things Handy
        </h2>

        <p>
          How may time did you check on google, <i>push in array in js ? </i>
          javaScript use push and Golang use append function, So store all
          repetetive code spippet here and let's save time to work on better
          things.
        </p>
        <button
          type="button"
          onClick={() => handleSignIn()}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
      <img className="home__left" src={homeSvg} alt="home page svg" />
    </motion.div>
```

### Bulma 

#### In react install bulma that add sass support and in main sass file import bulma.scss from the node module.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <title>Bulma css tutorial </title>
</head>

<body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>


            <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                <a class="navbar-item" href="./Col.html">Column</a>

                <a class="navbar-item">
                    Documentation
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <h1 class="is-size-2 has-background-success has-text-centered">Font and color</h1>
    <h1 class="is-size-1">Test balma font size is-size-1 to 7</h1>
    <h2 class="is-size-2">test h2 </h2>
    <h3 class="is-size-3">again test h3</h3>
    <h4 class="is-size-4">cool h4</h4>
    <p class="is-size-5">para tag</p>
    <p class="is-size-6">para tag</p>
    <p class="is-size-7">para tag</p>

    <h1 class="is-uppercase is-italic and also has-text-weight-bold">is-uppercase is-italic and also
        has-text-weight-bold</h1>

    <h1 class="title">title</h1>
    <h1 class="subtitle">subtitle</h1>

    <h1 class="has-text-centered is-size-4">has-text-centered</h1>
    <h1 class="has-text-primary">has-text-primary</h1>
    <h1 class="has-text-danger is-size-1">has-text-danger</h1>
    <h1 class="has-text-danger is-size-1 has-background-warning-light">has-text-danger is-size-1
        has-background-warning-light </h1>


    <h1 class="is-size-2 has-background-success has-text-centered"> container and spacing</h1>

    <h1 class="py-6 mt-4 is-size-3 has-background-primary">py-1 to 6 m 1-6</h1>

    <section class="section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque in officiis
        maiores sint. Optio distinctio culpa reprehenderit laborum ab eius, quibusdam maiores ipsum minima minus sint
        eligendi nesciunt eos fuga expedita dolore placeat vitae incidunt maxime. Consectetur aliquam veritatis maxime
        doloremque sunt dicta quis qui sequi reiciendis. Quibusdam vitae mollitia odit expedita voluptatibus odio aut
        illo dolorem cupiditate reiciendis.
    </section>

    <h1 class="is-size-2 has-background-success has-text-centered"> Navbar</h1>


</body>

</html>
```

```js
 <div class="columns ">
        <div class="column has-background-primary is-4">
            Sagar
        </div>
        <div class="column has-background-primary mx-2 is-5">
            SagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagarSagar
        </div>
        <div class="column has-background-primary is-1">
            Sagar
        </div>
        <div class="column has-background-primary is-2">
            Sagar
        </div>
    </div>
```

# React Testing

So fir thing to remember every test has 3 questions to ask

1. given - prepare the test give all the dependency 

2. when - like when button clicked 

3. then - then what should happen 

Now I would like to set up a testing environment for web componenet app.So what we need is a node environment ot run jest , jsdom for browser like support and i am also adding eslint for the error checking.
```
1. Node js 2. Jest 3. JsDOM 4. Es Lint
```
1. set up node project node init.
2. create node js project with npx cjp-cli -n project-name
3. Now set up eslint : npm i eslint
4. after neet to create .eslintrc file to do that use this command :  ./node_modules/.bin/eslint --init this command will ask you some question like where your code run , also you can select with style guilde.you want to use like airbnb etc.

- to run linting on test file use this pkg https://www.npmjs.com/package/eslint-plugin-jest
So now in your eslintrs will look like this,

### Runing jest in node js with ESM module

- just use a pkg jest-esm-transformer install it after that in pkg json file add this jest config

```JS
{
  "name": "frontend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest --watchAll"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jest": "^26.6.3"
  },
  "devDependencies": {
    "jest-esm-transformer": "^1.0.0"
  },
 "jest": {
    "verbose": true,
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.js$": "jest-esm-transformer",
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    }
 }
}

```

### React Testing Library.

To test react component we need 
1. react 
2. component that we want to test
3. and some render library to render that component in virtual dom => @testing-library/react

all test files will be .tsx to add typescript in jest you need __ts-jest__ module.

demo test file.

```js
import Button from '../Button'
import { fireEvent, render } from '@testing-library/react'

beforeEach(() => {
  // repetative login go here
})

test('should Button render with ptops', () => {
  const { getByTestId } = render(
    <Button
      text="Simple Button"
      onClick={() => {
        console.log('hi')
      }}
      type="button"
    />
  )

  const btn = getByTestId('button')
  expect(btn.textContent).toBe('Simple Button')
  expect(btn.getAttribute('type')).toBe('button')
})

test('should onclick on button working', () => {
  const testFn = jest.fn(() => {})
  const { getByTestId } = render(
    <Button text="Simple Button" onClick={() => testFn()} type="button" />
  )

  const btn = getByTestId('button')
  fireEvent.click(btn)
  expect(testFn.mock.calls.length).toBe(1)
})

export {}

```


component file.

```js
import { IbuttonProps } from './Types'
// import './Button.scss'
import { FC } from 'react'

const Button: FC<IbuttonProps> = ({ text, onClick, type }) => {
  return (
    <button
      className="primary_btn"
      type={type}
      onClick={() => onClick((p) => p + 1)}
      data-testid="button"
    >
      {text}
    </button>
  )
}

export default Button

```


