# Recoil

NOT PRODUCTION READY

Recoil is a front-end react powered framework.

  - Built for rapid development.
  - Advanced versions of default controls, e.g Button, Input
  - Developed with Typescript.

> The main goal of Recoil was to build a front end framework that allows developers to rapidly create mobile
> first web applications

### Version
0.3.47

A lot of the components are still at the early stages of development.

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