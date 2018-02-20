# Recoil

[![npm version](https://badge.fury.io/js/react-recoil.svg)](https://badge.fury.io/js/react-recoil)

Rapidly create React websites.

![Alt text](https://media.giphy.com/media/3o6ZtoFIzzy7NXEBqg/source.gif "Recoil")

Recoil is a react powered UI framework.

> The main goal of Recoil was to build a front end framework that allows developers to rapidly create mobile
> first web applications

## NPM Module

If you're using npm, you'll need to set up your project to build recoil.  Assuming you're using Webpack, first install

    npm install css-loader less less-loader style-loader --save-dev

Then in your Webpack configuration, include in the `loaders` array

```` JavaScript
{
    test: /\.less$/,
    loader: 'style-loader!css-loader!less-loader'
}
````

Then include the following CSS files in your HTML:

```` html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,900" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.css" />
````

In order to add the styles, you'll need to include in one file of your project

```` TypeScript
import 'react-recoil/src/index.less';
````

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
npm run build
````

Then open `recoil/docs/index.html` in your browser.

## Videos

Helpful videos on how to use each component can be found here:

* [Align]
* [Button]
* [Card]
* [Checkbox]
* [Door]
* [Dropdown]
* [Emerge]
* [Grid]
* [Input]
* [Layer]
* [Loading]
* [Modal]
* [Pane]
* [Selectable]
* [Shrink]
* [Toolbar]
* [Transform]
* [Wizard]

## Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Rename Door to Open
 - Rename Pane to SlideIn

