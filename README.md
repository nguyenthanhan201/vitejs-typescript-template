# vitejs-typescript-template

## 📝 Todos

- [Jenkins và Github Action](https://www.youtube.com/watch?v=Gpl_usE_BWM&t=309s)
- [add more scripts]()
- [add more documents]()
- [add more base components]()
- [add more base hooks]()
- [add more base utils]()

## Requirements

- [Node.js](https://nodejs.org/en/) >= v16.18.0
- [Yarn](https://yarnpkg.com/en/) >= 1.22.19
- [Npm](https://www.npmjs.com/) >= 8.19.2

## Quick Start

- Init project with [degit]

  ```sh
  $ npm install -g degit # install degit if you don't have it
  $ degit nguyenthanhan201/vitejs-typescript-template <project-name>
  $ degit nguyenthanhan201/vitejs-typescript-template#<branch-name>   # branch
  ```

  [Document of Degit](https://github.com/Rich-Harris/degit)

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
<!-- - 💅 Integrate in-app debug menu that help you to get the information of device, environment, bundleId, version,... and also allow you to change environment directly in your app. -->
- ⚙️ Support for multiple environment builds, including Production, Staging, and Development.
- 🦊 Husky for Git Hooks, to automate your git hooks and enforce code standards.
- 💡 State management with [Zustand](null)
- 🚫 Lint-staged to ensure that your code is always up to standards.
  <!-- - ☂️ Pre-installed [React Router Dom](https://reactnavigation.org) to provide a comprehensive navigation solution for your app. -->
  <!-- - 💫 [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as a storage solution to save sensitive data. -->
- 🛠 A simple workflow for building, releasing, and distributing your app using [fastlane](https://fastlane.tools).
- 🔥 [axios](https://github.com/axios/axios) for fetching data, to help you build efficient and performant apps.
<!-- - 🧵 [CodePush](https://github.com/microsoft/react-native-code-push) to deploy mobile app updates directly to their users’ devices. -->
- 🎯 Localization with [i18n-js](https://github.com/fnando/i18n).
- 📝 [ESLint](https://eslint.org) to maintain a consistent code style.
<!-- commitLint -->
- ✅ Commitlint to lint your commit messages.
- 🚀 Auto deploy to [Vercel](https://www.vercel.com) when push to `main` branch.

## 📦️ Dependencies

Our template is ship with the following rock-solid technical decisions out of the box:

| Library               | Category          | Version | Description                                                     |
| --------------------- | ----------------- | ------- | --------------------------------------------------------------- |
| React                 | UI Framework      | v18     | The most popular UI framework in the world                      |
| React Router Dom      | Navigation        | v6      | Expose config variables to your javascript code                 |
| i18n-js               | Translation       | v4      | Provide the i18n translations on the JavaScript                 |
| Axios                 | Network Services  | v1      | Provides promise based HTTP client                              |
| Redux / Redux-toolkit | State Management  | v8      | Provides state container for JavaScript apps                    |
| Redux Saga            | Redux side-effect | v1      | Provides Redux side effect manager                              |
| ESLint                | Code Formater     | v8      | Tool for identifying and reporting on patterns Javascript       |
| Husky                 | Native Git Hook   | v8      | Improves your commits and more testing                          |
| Tailwind              | CSS Framework     | v3      | Improves time style components                                  |
| Date-fns              | Date Library      | v2      | Improves time when work with date                               |
| Lodash                | Utils             | v4      | Improves time when work with array, object, string, number, etc |

## Documents

- [Config husky + commintLint](https://viblo.asia/p/nang-cao-chat-luong-code-va-hieu-qua-lam-viec-nhom-voi-husky-lint-staged-commitlint-4dbZNnMnZYM)
- [Degit](https://github.com/Rich-Harris/degit)
- [Jenkins vs Github Action](https://www.youtube.com/watch?v=Gpl_usE_BWM&t=696s)
- [Networking](docs/networking.md)

## Table of scripts

| Script                                                      | Description                        | Syntax            |
| ----------------------------------------------------------- | ---------------------------------- | ----------------- |
| [Run App](template/scripts/genimg.js)                       | Run project with develop eviroment | `yarn dev`        |
| [Run App with Multiple Brosew](template/scripts/run-app.sh) | Run app with orthers browser       | `yarn playwright` |

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/nguyenthanhan201/"><img src="https://avatars.githubusercontent.com/u/80932055?v=4" width="100px;" alt="Thanh An" style="border-radius: 10%;"/><br /><sub><b>Thanh An</b></sub></a><br /></td>
  </tr>
</table>
