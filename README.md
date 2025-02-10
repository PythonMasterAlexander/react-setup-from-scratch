# Setting up  react from scratch

## Goal

To understand how to use and set up React from scratch, not using installs 
with React-powered frameworks like Next.js, Remix, Vite or Gatsby.

These frameworks comes pre-build with everything you need out of the box, but they wont
help you learn to setup React from scratch.

## Brief

Setup React locally on a machine in a project directory

## Installation

### Setup a directory locally
```bash
mkdir react-setup-from-scratch
cd react-setup-from-scratch
git init
touch README.md .gitignore
```
Add in .gitignore
# dependencies
/node_modules
/build
/dist
# misc
.DS_Store

NB: More dependencies can be added as your project grow 

### I use PnpM as the package manager 
```bash
pnpm init
```
### Add react
```bash
pnpm add react react-dom
```

### Add linting and formatting
```bash
pnpm add -D eslint prettier
```
NB: Config files for linting and formatting must be added, read the documentation 

### Adding TypeScript in the project
```bash
pnpm add -D typescript
pnpm add @types/react @types/react-dom
```
NB: Config file for TypeScript must be added, read the documentation 

### It's a good idea to use React developer tools in your preferred web browser

### React Compiler

The React compiler uses it's knowledge of JavaScript and React's rules to
automatically memorize values or groups of values in your React components and
hooks. 

The most used are Babels React compiler but as of know 2025 a new compiler is
under development and can be used as a beta version. For this project I am going
with the older Babel Compiler.

Babel let's you use the latest ECMAScript features and JSX syntax in React
projects, babel compiler turns ECMAScript 2015+ into backwards compatible
version of JavaScript in current and older browsers.

Adding Babel Compiler 
```bash
pnpm add -D @babel/core @babel/preset-env @babel/preset-react 
```

Adding Babel TypeScript presets
```bash
pnpm add -D @babel/preset-typescript 
```

NB: Babel config file must be added, read the documentation

### Webpack

Webpack is used for streamlining and optimizing the development and deployment
processes. 

React applications are build using a modular approach where components and
dependencies are split across many files. Webpack bundles these files into one
or few files, reducing the number of HTTP requests.

Webpack enables code spliting, which divides the application into smaller
chunks. This ensures that only the necessary parts of the application are
loaded, improving load times and user experience for larger React apps. 

Webpacks works with Babel to transpile modern JavaScript and JSX into browser
compatible code. This ensures React applications run on older browsers.

Webpack provides tools like `webpack-dev-server` for live reloading during
development.

Adding Webpack
```bash
pnpm add -D webpack webpack-cli webpack-dev-server
```
