<div align="center">

<img src="https://raw.githubusercontent.com/HospitalRun/design/master/logo/horizontal/logo-on-transparent.png" alt="HospitalRun logo"/>

![Last commit](https://img.shields.io/github/last-commit/hospitalrun/hospitalrun) [![GitHub CI](https://github.com/HospitalRun/hospitalrun/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/hospitalrun/actions) [![Documentation Status](https://readthedocs.org/projects/hospitalrun/badge/?version=latest)](https://docs.hospitalrun.io) ![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg) ![License](https://img.shields.io/github/license/hospitalrun/hospitalrun) [![Slack](https://hospitalrun-slack.herokuapp.com/badge.svg)](https://hospitalrun-slack.herokuapp.com)

<hr />
</div>

All **HospitalRun** code lives in a single repository, an architecture generally called a monorepo. This repository holds all of HospitalRun's open source projects that lived in their own separate Github repos: [frontend](https://github.com/HospitalRun/hospitalrun-frontend), [server](https://github.com/HospitalRun/hospitalrun-server) and [components](https://github.com/HospitalRun/components).
Built with React, Node, PouchDB/CouchDB and using offline first design, we're working to deliver an HIS system that makes usability the #1 requirement, is built specifically for developing world requirements, and seeks to give back time to patient care.

**<h3>‼️ Version 1.0.0-beta is no longer supported. Version 2 is currently under development ‼️</h3>**

# FAQs

| Question                                                                   | Answer                                                                                                          |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| "I want to help"                                                           | [Find out how](#contributing)                                  |
| "I have a question"                                                        | [Join our Slack Workspace](https://hospitalrun-slack.herokuapp.com)                                          |
| "I found a bug"                                                            | [Open an issue](https://github.com/HospitalRun/hospitalrun/issues/new/choose)                                   |
| "How can I deploy 1.0.0-beta?"                                             | [Follow this guide](http://eepurl.com/c7uKJ5)                                                                   |

# Table of Contents

- [Contributing](#contributing)
- [Project Structure](#project-structure)
- [Application Infrastructure](#application-infrastructure)
- [Behind HospitalRun](#behind-hospitalRun)
- [License](#license)

# Contributing

Interested in contributing to HospitalRun? There are many ways that you can get involved:
- Try the [application](https://staging.hospitalrun.io)
- Request [new features](https://github.com/HospitalRun/hospitalrun/issues/new?template=feature.md) and [report bugs](https://github.com/HospitalRun/hospitalrun/issues/new?template=bug.md)
- Write [project documentation](https://hospitalrun.readthedocs.io/)
- Contribute to the [source code](https://github.com/HospitalRun/hospitalrun/blob/master/.github/CONTRIBUTING.md)
- [Sponsor the project](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)
- Translate text in the [application](https://staging.hospitalrun.io)

# Project Structure

| Submodules                                                      | Progress status                                                      | Build status                                                                                                                                             | Coverage status                                                                                                                                                                              | Code quality                                                                                                                                                                                                                 |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Components](https://github.com/HospitalRun/components)         | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/components/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/components/actions)             | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/components/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/components?branch=master)                     | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/components.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/components/context:javascript)                     |
| [Frontend](https://github.com/HospitalRun/hospitalrun-frontend) | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/frontend/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/frontend/actions)                 | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-frontend/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-frontend?branch=master) | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/hospitalrun-frontend.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun-frontend/context:javascript) |
| [Server](https://github.com/HospitalRun/hospitalrun-server)     | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/server/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/server/actions)                     | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-server/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-server?branch=master)     | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/hospitalrun-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun-server/context:javascript)     |
| [Core](https://github.com/HospitalRun/hospitalrun-core)         | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/hospitalrun-core/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/hospitalrun-core/actions) | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/hospitalrun-core/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/hospitalrun-core?branch=master)         | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/hospitalrun-core.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/hospitalrun-core/context:javascript)         |
| [CLI](https://github.com/HospitalRun/cli)                       | ![Status](https://img.shields.io/badge/Status-developing-brightgree) | [![GitHub CI](https://github.com/HospitalRun/cli/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/cli/actions)                           | [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/cli/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/cli?branch=master)                                   | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/cli/context:javascript)                                   |

<em>Last Update: 7 Mar 2020</em>

# Application Infrastructure

A visual representation of the functionality of all HospitalRun modules and their interactions.

[<img width="1658" alt="miro" src="https://user-images.githubusercontent.com/6388707/78055877-7b50ed80-7384-11ea-9e65-602a0f8b9ec9.png">](https://miro.com/app/board/o9J_kv4RtwE=/)

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout)

## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com)

## Lead Maintainer

[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## [Core Maintainers](https://github.com/orgs/HospitalRun/teams/core-maintainers)

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/18731800?s=460&v=4" width="100px;"/><br /><sub><b>Jack Meyer</b></sub>](https://github.com/jackcmeyer) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
|---|---|

## [Core Contributors](https://github.com/orgs/HospitalRun/teams/core-contributor)

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) |  [<img src="https://avatars2.githubusercontent.com/u/8810755?s=460&u=495b69e528066f88944d8ce487ce39afe01b9ccb&v=4" width="100px;"/><br /><sub><b>Kumiko Kashii</b></sub>](https://github.com/kumikokashii) | [<img src="https://avatars3.githubusercontent.com/u/603924?s=460&v=4" width="100px;"/><br /><sub><b>Grace Lau</b></sub>](https://github.com/lauggh) | [<img src="https://avatars2.githubusercontent.com/u/26657904?s=460&u=d960bf3d95ae0c9bb858f1f069fff03e51254ddb&v=4" width="100px;"/><br /><sub><b>Stefano Miceli</b></sub>](https://github.com/StefanoMiC) |
|---|---|---|---|

## Medical Supervisor

[<img src="https://avatars2.githubusercontent.com/u/24660474?s=460&v=4" width="100px;"/><br /><sub><b>M.D. Daniele Piccolo</b></sub>](https://it.linkedin.com/in/danielepiccolo)<br />

## Past Contributors

[<img src="https://avatars2.githubusercontent.com/u/8914893?s=460&v=4" width="100px;"/><br /><sub><b>Michael Daly</b></sub>](https://github.com/MichaelDalyDev)<br />

## Contributors

[![Contributors](https://opencollective.com/hospitalrun/contributors.svg?width=960&button=false)](https://github.com/HospitalRun/hospitalrun-frontend/graphs/contributors)

## Founders

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/609052?s=460&v=4" width="100px;"/><br /><sub><b>John Kleinschmidtr</b></sub>](https://github.com/jkleinsc) | [<img src="https://avatars0.githubusercontent.com/u/929261?s=400&v=4" width="100px;"/><br /><sub><b>Joel Worrall</b></sub>](https://github.com/tangollama)  | [<img src="https://avatars0.githubusercontent.com/u/1319791?s=460&v=4" width="100px;"/><br /><sub><b>Joel Glovier</b></sub>](https://github.com/jglovier)  |
|---|---|---|

# License

Released under the [MIT license](LICENSE).

