# Cam World eCommerce Platform

Demo URL: [https://camworld.ecdevstudio.com/](https://camworld.ecdevstudio.com/)

Backend Repository: [https://github.com/ecdev-studio/camworld-backend](https://github.com/ecdev-studio/camworld-backend)

![screenshot](https://github.com/ecdev-studio/ecdev-studio.github.io/blob/main/screenshot.png)

## Features

- Full-featured shopping cart
- Product reviews and ratings
- Product sorting feature
- Checkout process (shipping, payment method, etc)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Make sure you have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), make sure you add .js at the end or you will get a "module not found" error.

You can also install and setup Babel if you prefer.

### Env Variables

Rename a .env.sample to .env.local and supply your data

### Install Dependencies and add .env

```
npm install
```

### Run

```
npm run dev
```

## License

The MIT License

Copyright (c) 2021 EcDev Studio https://www.ecdevstudio.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
