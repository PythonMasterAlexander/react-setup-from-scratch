# Setting up  react from scratch

## Goal
To understand how to use and set up React from scratch, not using installs 
with React-powered frameworks like Next.js, Remix, Vite or Gatsby.

These frameworks comes pre-build with everything you need out of the box, but they wont
help you learn to setup React from scratch.

## Brief
Setup React locally on a machine in a project directory

## Installation
### Setup project directory locally

```bash
mkdir react-setup-from-scratch
cd react-setup-from-scratch
git init
touch README.md .gitignore
```
Add in .gitignore
- /node_modules
- /build
- /dist
- .DS_Store

NB: More ignores can be added as your project grow but for now these are the most important to add if you want to push the project to GitHub 

### PnpM as the package manager 
```bash
pnpm init
```
This command will create a package.json and the pnpm lock file

### Add react
```bash
pnpm add react react-dom

### Add linting and formatting
```bash
pnpm add -D eslint @eslint/js --save-exact prettier
```
### Adding TypeScript in the project
```bash
pnpm add -D typescript
pnpm add @types/react @types/react-dom
```
### It's a good idea to use React developer tools in your preferred web browser

### React Compiler
The React compiler uses it's knowledge of JavaScript and React's rules to
automatically memorize values or groups of values in your React components and
hooks. 

The most used are Babels React compiler but as of 2025, a new compiler is
under development and can be used as beta version. For this project I am going
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

### Configuration Files

You must add configuration files:

TypeScript
- tsconfig.json

Prettier
- .prettierrc 
- .prettierignore

The .prettierrc file can use json or yaml formating

ESLint configuration file
- .eslintcache
- .eslintignore
- .eslint.config.js

Babel Compiler configuration file
- babel.config.json

Webpack Bundler configuration file
- webpack.config.js

For each configuration file, read the documentation on how to use them 

### Directory and File setup 
### Scripting
