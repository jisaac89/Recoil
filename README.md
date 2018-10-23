# Recoil

[![npm version](https://badge.fury.io/js/react-recoil.svg)](https://badge.fury.io/js/react-recoil)

Rapidly create React websites.

![Alt text](https://media.giphy.com/media/3o6ZtoFIzzy7NXEBqg/source.gif "Recoil")

Recoil is a react powered UI framework.

> The main goal of Recoil was to build a front end framework that allows developers to rapidly create mobile
> first web applications

## NPM Module

Then include the following CSS files in your HTML:

```` html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.css" />
<link async href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
````

In order to add the styles, you'll need to include in one file of your project

## CSS Styles
```` TypeScript
import 'react-recoil/dist/styles.css';
````

## Preffered Method - LESS Styles
```` TypeScript
import 'react-recoil/src/index.less';
````

You'll need to set up your project to build recoil.  Assuming you're using Webpack, first install

    npm install css-loader less less-loader style-loader --save-dev

Then in your Webpack configuration, include in the `loaders` array

```` JavaScript
{
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
}
````

## Importing Components
Now, on your project you can destructure the components you want.

```` TypeScript
import { Toolbar, Button } from 'react-recoil';
````

An example of how to use them in your app.

```` TypeScript
<Toolbar spacing block>
    <Button icon="home" />
    <Button icon="user">
        Users
    </Button>
</Toolbar>
````

## Documentation

First run these commands

````
git clone https://github.com/jisaac89/recoil.git
cd recoil
npm install
npm run start:dev
````

Should open up on port:3000

## Todos

 - Write Tests