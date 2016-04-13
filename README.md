# Recoil

NOT PRODUCTION READY

Recoil is a front-end react powered framework.

  - Built for rapid development.
  - Advanced versions of default controls, e.g Button, Input
  - Developed with Typescript.

> The main goal of Recoil was to build a front end framework that allows developers to rapidly create mobile
> first web applications

### Version
0.3.34

A lot of the components are still at the early stages of development.

### Tech

Recoil uses a number of awesome open source projects to work properly:

* [React]
* [Typescript]
* [classNames]
* [Font Awesome]
* [Animate.css]
* [Normalize.css]

And of course big thanks to Twitter Bootstrap, Semantics UI, Apple and Google Material UI for design inspirations!

### NPM Module

```sh
$ npm install react-recoil
```

Then include the following CSS files in your HTML:

```sh
$ <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css" />
$ <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
```

Then include the relevant LESS file (webpack less-loader required.)

```sh
import 'react-recoil/less/Recoil.less';
```

Now, on your project you can destructure the components you want.

```sh
import {Toolbar, Button} from 'react-recoil';
```

An example of how to use them in your app.

```sh
<Toolbar spacing block>
  <Button icon="home" />
  <Button icon="user">
    Users
  </Button>
</Toolbar>
```

### Documentation

```sh
$ git clone https://github.com/jisaac89/recoil.git
$ cd recoil
$ npm install
$ tsd install
$ cd doc
$ npm start
```

### Videos

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

### Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Rename Door to Open
 - Rename Pane to SlideIn

License
----

MIT


**Aw Yea**

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
