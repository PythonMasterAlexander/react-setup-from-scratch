# Setting up  react from scratch

## Goal

To understand how to use and set up React from scratch, not using installs 
with React-powered frameworks like Next.js, Remix, Vite or Gatsby.

These frameworks comes with everything you need out of the box, but they wont
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
- /node_modules
- /build
- /dist
- .DS_Store

NB: More ignores can be added as your project grow but for now these are the most important to add if you want to push the project to GitHub 

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

To be continue: React Compiler and React file setup structure
