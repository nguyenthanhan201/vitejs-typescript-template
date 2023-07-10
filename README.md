# vitejs-typescript-template

## Requirements

NodeJS (version 16 or later) and NPM is required.
To make sure you have them available on your machine, try running the following command

```sh
$ npm -v && node -v
8.5.5
v16.15.0
```

## Quick Start

- Init project with [degit]

  ```sh
  $ npm install -g degit # install degit if you don't have it
  $ degit nguyenthanhan201/vitejs-typescript-template <project-nam>
  ```

  [Check out the full documentation!](#documents)

- Rules commit message

  ```sh
  type(scope?): subject #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
  ```

  `type` ở trên có thể là:

  - `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
  - `ci`: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
  - `chore`: add something without touching production code (Eg: update npm dependencies)
  - `docs`: Documentation only changes
  - `feat`: A new feature
  - `fix`: A bug fix
  - `perf`: A code change that improves performance
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `revert`: Reverts a previous commit
  - `style`: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
  - `test`: Adding missing tests or correcting existing tests
  - `scope` thì là optional, và nếu có thì nó nên là tên của package mà commit hiện tại làm ảnh hưởng. Mình thấy scope thường dùng ở các repository mà chứa nhiều packages dạng monorepo, ví dụ repo của Vue 3, scope sẽ là tên của 1 package nào đó ở folder packages

  `subject` là nội dung của commit

## ⭐ Features

- 🎉 Provide scripts that perform various tasks, such as building the project, generate files, starting the development server and more.
- 💅 Integrate in-app debug menu that help you to get the information of device, environment, bundleId, version,... and also allow you to change environment directly in your app.
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development.
- 🦊 Husky for Git Hooks, to automate your git hooks and enforce code standards.
- 💡 State management with [Redux Toolkit](https://redux-toolkit.js.org) along with [Redux Saga](https://redux-saga.js.org).
- 🚫 Lint-staged to ensure that your code is always up to standards.
- ☂️ Pre-installed [React Navigation](https://reactnavigation.org) to provide a comprehensive navigation solution for your app.
- 💫 [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as a storage solution to save sensitive data.
- 🛠 A simple workflow for building, releasing, and distributing your app using [fastlane](https://fastlane.tools).
- 🔥 [axios](https://github.com/axios/axios) for fetching data, to help you build efficient and performant apps.
- 🧵 [CodePush](https://github.com/microsoft/react-native-code-push) to deploy mobile app updates directly to their users’ devices.
- 🎯 Localization with [i18n-js](https://github.com/fnando/i18n). |

## Documents

- [Networking](docs/networking.md)
- [Config husky + commintLint](https://viblo.asia/p/nang-cao-chat-luong-code-va-hieu-qua-lam-viec-nhom-voi-husky-lint-staged-commitlint-4dbZNnMnZYM)

## Table of scripts

| Script                                        | Description                                                                                                                                   | Syntax                           |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [Generate images](template/scripts/genimg.js) | Get all images from [src/assets/images](template/src/assets/images/) and require images in [src/themes/images](template/src/themes/images.js) | `yarn generateimages`            |
| [Run App](template/scripts/run-app.sh)        | Run app in Android or iOS with selected variants                                                                                              | `yarn android`<br /> `yarn ios ` |

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/nguyenthanhan201/"><img src="https://avatars.githubusercontent.com/u/80932055?v=4" width="100px;" alt="Thanh An" style="border-radius: 10%;"/><br /><sub><b>Thanh An</b></sub></a><br /></td>
  </tr>
</table>
