# RLR Audio Team Website

## Requirements
This project uses node js. Everything else should be available from npm.

## Install 
```
npm i
```

## Run
To run the project locally:
```
npm start
```

## Build
The frontend can be built either in development or production mode. The commands for these are:
```
npm run build:dev
npm run build:prod
```

A production build will omit dev features like sourcemaps. It should also perform prod optimizations like minification. See https://webpack.js.org/guides/production/

The server will look for `process.env.NODE_ENV` for a mode, and only enable development things like HMR when `process.env.NODE_ENV !== 'production'`
