# RLR Audio Team Website

## Making Content Changes
The text on the site comes from markdown files under `/content` and `/files`. In order to make changes
to the site, open a file in Github, edit it via the pencil icon and save. Changes will take a few minutes to deploy.

### `/content`
This contains markdown files for sections of the site that are prose. There are currently two: `Introduction.md` and `Conclusion.md`. These appear before and after the files section. 

### `/files`
This directory should containt `.zip`, `.pdf` and `.json` files. 

Each `.json` file configures a group of files and a pdf. A group has a documentation pdf, and a list of files. Here is an example:
```
{
    "title": "Item One",
    "documentation": "RLR Audio Web.pdf",
    "files": [
        "samples.zip",
        "samples.zip"
    ]
}
```

For each `.json` file, there will be a section shown in the site.

You can add or remove files with Github's web app.

## Development

### Requirements
This project uses node js. Everything else should be available from npm.

### Install 
```
npm i
```

### Run
To run the project locally:
```
npm start
```

### Build
The frontend can be built either in development or production mode. The commands for these are:
```
npm run build:dev
npm run build:prod
```

A production build will omit dev features like sourcemaps. It should also perform prod optimizations like minification. See https://webpack.js.org/guides/production/

The server will look for `process.env.NODE_ENV` for a mode, and only enable development things like HMR when `process.env.NODE_ENV !== 'production'`

### License

The dataset is distributed under the CC-BY-4.0 license, as found in the LICENSE file.
