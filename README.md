# Recoil

[![npm version](https://badge.fury.io/js/%40cubex%2Frecoil.svg)](https://badge.fury.io/js/%40cubex%2Frecoil)

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
import '@cubex/recoil/less/index/.less';
````

Now, on your project you can destructure the components you want.

```` TypeScript
import { Toolbar, Button } from '@cubex/recoil';
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

````
git clone https://github.com/cubex30/recoil.git
cd recoil
npm install
npm install typings -g
npm run typings install
cd doc
npm start
````

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

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
