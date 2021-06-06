# Newt

## Setting up for development

1. Clone the repo
2. Run `npm install` to get download all dependencies
3. Follow the setup steps on the [Tauri Documentation](https://tauri.studio/en/docs/getting-started/intro) site for your development platform

## Development

1. Run `npm run start` to start the Angular dev server or you can press `ctrl+shift+b` if you're using VSCode.
2. Run `npm run tauri dev` to start the Tauri dev server. This supports hot reloading so will update when you make changes to either Angular or the Tauri server.

## Build

Run `npm run build:native` to build the project for native devices. The build artifacts can be found in the `src-tauri/target` folder.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
