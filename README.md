<div align="center">

<img src="https://raw.githubusercontent.com/HospitalRun/design/master/logo/logo-on-transparent.png" alt="HospitalRun logo"/>

![Last commit](https://img.shields.io/github/last-commit/hospitalrun/hospitalrun) [![GitHub CI](https://github.com/HospitalRun/hospitalrun/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/hospitalrun/actions) [![Documentation Status](https://readthedocs.org/projects/hospitalrun/badge/?version=latest)](https://docs.hospitalrun.io) [![Activity](https://img.shields.io/github/commit-activity/m/hospitalrun/hospitalrun)](https://github.com/hospitalrun/hospitalrun/pulse) ![Repo size](https://img.shields.io/github/repo-size/hospitalrun/hospitalrun) ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg) [![Slack](https://hospitalrun-slack.herokuapp.com/badge.svg)](https://hospitalrun-slack.herokuapp.com)
<hr />
</div>

All **HospitalRun** code lives in a single repository, an architecture generally called a monorepo. This repository holds all of HospitalRun's open source projects that lived in their own separate Github repos: [frontend](https://github.com/HospitalRun/hospitalrun-frontend), [server](https://github.com/HospitalRun/hospitalrun-server) and [components](https://github.com/HospitalRun/components).
Built with React, Node, PouchDB/CouchDB and using offline first design, we're working to deliver an HIS system that makes usability the #1 requirement, is built specifically for developing world requirements, and seeks to give back time to patient care.

**Version 1.0.0-beta is no longer supported. Version 2 is currently under development.**


# FAQs

| Question | Answer |
|--------|-------|
| "I want to help" | [Read this paragraph](https://github.com/HospitalRun/hospitalrun#contributing) |
| "I have a question" | [Join to our Slack Workspace](https://hospitalrun-slack.herokuapp.com) |
| "I found a bug" | [Open an issue](https://github.com/HospitalRun/hospitalrun/issues/new/choose) |
| "How do I push/commit changes to the repo?" | [Follow these steps](#commiting) |
| "How can I deploy 1.0.0-beta?" | [Follow this guide](http://eepurl.com/c7uKJ5) |  

<div align="center">

[![Contributors](https://img.shields.io/badge/Hint-Are%20you%20a%20new%20contributor%3F-Green?style=for-the-badge&logo=github)](#contributing)

</div>

 ## Table of Contents

- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Provide feedback](#provide-feedback)
- [Toolchain](#toolchain)
- [Working on an Issue](#working-on-an-issue)
- [Getting Started](#getting-started)
- [Pull all submodules](#pull-all-submodules)
- [Commiting](#commiting)
  - [How to commit a specific package?](#how-to-commit-a-specific-package)
- [Updating the monorepo structure](#updating-the-monorepo-structure)
- [Application infrastructure](#application-infrastructure)

## Project Structure

| Submodules                                                      | Progress status                                                      | Build status                                                                                                                                             | Coverage status                                                                                                                                                                              |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Components](https://github.com/HospitalRun/components)         | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/components/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/components/actions)             | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/components/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/components?branch=master)                     |
| [Frontend](https://github.com/HospitalRun/hospitalrun-frontend) | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/frontend/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/frontend/actions)                 | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-frontend/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-frontend?branch=master) |
| [Server](https://github.com/HospitalRun/hospitalrun-server)     | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/server/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/server/actions)                     | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-server/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-server?branch=master)     |
| [Core](https://github.com/HospitalRun/hospitalrun-core)         | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/hospitalrun-core/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/hospitalrun-core/actions) | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-core/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-core?branch=master)         |
| [CLI](https://github.com/HospitalRun/cli)                       | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/cli/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/cli/actions)                           | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/cli/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/cli?branch=master)                                   |

<em>Last Update: 7 Mar 2020</em>

## Contributing

Interested in contributing to HospitalRun? There are many ways that you can get involved:

- Try the [application](https://staging.hospitalrun.io)
- Review and update [project documentation](https://hospitalrun.readthedocs.io/)
- Contributing to translations
- Contributing to the [source code](https://github.com/HospitalRun/hospitalrun/blob/master/.github/CONTRIBUTING.md)
- Request [new features](https://github.com/HospitalRun/hospitalrun/issues/new?template=feature.md) and [report bugs](https://github.com/HospitalRun/hospitalrun/issues/new?template=bug.md)
- [Sponsor the project](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

## Toolchain

We recommend the use of [**nvm**](https://github.com/nvm-sh/nvm#install--update-script) for the management of different versions of Node, and [**yarn**](https://yarnpkg.com/) for a fast, reliable, and secure dependency management. We suggest to install **yarn** with `npm i -g yarn`.

## Getting Started

Use these commands to start using the monorepo. The following commands require that your GitHub account has [SSH access](https://help.github.com/en/articles/connecting-to-github-with-ssh) enabled.

```
git clone git@github.com:HospitalRun/hospitalrun.git
cd hospitalrun
git submodule update --init --recursive
yarn
yarn workspaces run build

# Do some coding then commit with
npx git-cz
```

## Working on an Issue

In order to optimize the workflow and to prevent multiple contributors working on the same issue without interactions, a contributor must ask to be assigned to an issue by one of the core team members: it's enough to ask it inside the specific issue.

## Pull all submodules

Use these commands to update all submodules and use the last available commit.

```
git submodule update --recursive --remote

yarn upgrade // Update all dependencies automatically
yarn update // This is similar to npm-check interactive update mode. It provides an easy way to update outdated packages.
```

## Commiting

This repo uses [conventional commits](https://github.com/Landish/cz-gitmoji) and [semantic-release](https://github.com/momocow/semantic-release-gitmoji). Once you have changes staged
you can run `git cz` from the root directory in order to commit to the proper standards.

1. Staging all pending changes. Es: `git add .`
2. Use the following command: `yarn commit`
3. Updates remote refs using local refs. Es: `git push`

### How to commit a specific package?

```
yarn commit-frontend
yarn commit-server
yarn commit-components
yarn commit-cli
yarn commit-core
yarn commit-docs
```

You must follow the following rules:

1. Commit description must always start with a capital letter.
2. Always use a scope. Here are some examples:

**Generic**

```
setting
ci
deps
readme
devops
system
core
testing
cli
release
lifecycle
```

**Monorepo specific**

```
monorepo
package
release
lifecycle
workspace
```

## Updating the monorepo structure

Use these commands to add a new package after adding a submodule.

```
git submodule update --remote
git add ./packages
yarn upgrade
npx git-cz
```

# Application infrastructure

A visual representation of the functionality of all HospitalRun modules and their interactions.

[<img width="1658" alt="miro" src="https://user-images.githubusercontent.com/6388707/78055877-7b50ed80-7384-11ea-9e65-602a0f8b9ec9.png">](https://miro.com/app/board/o9J_kv4RtwE=/)

<hr />

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout)

## Lead Maintainer

[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## Core Team

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) |[<img src="https://avatars2.githubusercontent.com/u/8914893?s=460&v=4" width="100px;"/><br /><sub><b>Michael Daly</b></sub>](https://github.com/MichaelDalyDev)|[<img src="https://avatars1.githubusercontent.com/u/25009192?s=460&v=4" width="100px;"/><br /><sub><b>Riccardo Gulin</b></sub>](https://github.com/bazuzu666) | [<img src="https://avatars3.githubusercontent.com/u/603924?s=460&v=4" width="100px;"/><br /><sub><b>Grace Lau</b></sub>](https://github.com/lauggh) | [<img src="https://avatars3.githubusercontent.com/u/18731800?s=460&v=4" width="100px;"/><br /><sub><b>Jack Meyer</b></sub>](https://github.com/jackcmeyer) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
|---|---|---|---|---|---|

## Medical Supervisor

[<img src="https://avatars2.githubusercontent.com/u/24660474?s=460&v=4" width="100px;"/><br /><sub><b>M.D. Daniele Piccolo</b></sub>](https://it.linkedin.com/in/danielepiccolo)<br />

## Contributors

[![Contributors](https://opencollective.com/hospitalrun/contributors.svg?width=960&button=false)](https://github.com/HospitalRun/hospitalrun-frontend/graphs/contributors)

## Founders

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/609052?s=460&v=4" width="100px;"/><br /><sub><b>John Kleinschmidtr</b></sub>](https://github.com/jkleinsc) | [<img src="https://avatars0.githubusercontent.com/u/929261?s=400&v=4" width="100px;"/><br /><sub><b>Joel Worrall</b></sub>](https://github.com/tangollama)  | [<img src="https://avatars0.githubusercontent.com/u/1319791?s=460&v=4" width="100px;"/><br /><sub><b>Joel Glovier</b></sub>](https://github.com/jglovier)  |
|---|---|---|

# License

Released under the [MIT license](LICENSE).
