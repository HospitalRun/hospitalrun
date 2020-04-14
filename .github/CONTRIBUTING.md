# Contributing

HospitalRun is made up of several repositories. Below is a breakdown of each repository: 

| Repository                                                                                          | Description                                             | Technologies                                                                                                                                                                                  |   |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| [frontend](https://github.com/HospitalRun/hospitalrun-frontend/blob/master/.github/CONTRIBUTING.md) | A repository that holds the frontend React appllication | [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Redux](https://react-redux.js.org/), [PouchDB](https://pouchdb.com/), [Jest](https://jestjs.io/),              |   |
| [components](https://github.com/HospitalRun/components/blob/master/.github/CONTRIBUTING.md)         | A repository of building block components.              | [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [TSDX](https://github.com/jaredpalmer/tsdx), [Jest](https://jestjs.io/), [Storybook](https://storybook.js.org/) |   |
| [server](https://github.com/HospitalRun/hospitalrun-server/blob/master/.github/CONTRIBUTING.md)     | A repository to host the service                        | [TypeScript](https://www.typescriptlang.org/), [NodeJs](https://nodejs.org/en/), [Fastify](https://www.fastify.io/), [CouchDB](https://couchdb.apache.org/)                                   |   |
| [core](https://github.com/HospitalRun/hospitalrun-core/blob/master/.github/CONTRIBUTING.md)         | A repository to host core models                        | [TypeScript](https://www.typescriptlang.org/), [Typebox](https://github.com/sinclairzx81/typebox)                                                                                             |   |typebox)                                                                                             |   |

If you are interested in working in any of these repositories, [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the individual repository and follow the CONTRIBUTING guide for setting up your local development environment.

## Working on an Issue

Interested in working on the HospitalRun codebase? The Issues tab in each repository is the best spot to begin looking for work. Issues with the `help wanted` label indicate that the issue is open for a contributor to work on! Looking for an aggregation of all open issues in the HospitalRun project, check this [link](https://hospitalrun.github.io/ubersicht/?showOpen=true&showClosed=false&showCommented=true&showUncommented=true&showIssues=true&showPullRequests=true&last24Hours=false&repos=null&labels=null&milestones=null&usernames=null#hospitalrun) out!

In order to optimize the workflow and to prevent multiple contributors working on the same issue without interactions, a contributor must request to have the issue assigned to them. To request an issue be assigned to you, leave a comment on the issue indicating you'd like to work on it! A core maintainer will then assign the issue to you, indicating that you are the one that will work on it.

In order to support as many contributors as possible, we will try to assign only one issue per contributor at a time.

If a contributor has been assigned an issue for more than 14 days and there has been no activity, a core maintainer will leave a comment asking about the status of the issue. If there is no response in 7 days, then the issue will be unassigned and marked as `help wanted`.

## Committing Changes

All repositories use [conventional commits](https://github.com/Landish/cz-gitmoji) and [semantic-release](https://github.com/momocow/semantic-release-gitmoji). Once a contributor has changes staged they can run `git cz` from the root directory in order to commit to the proper standards.

1. Staging all pending changes. Es: `git add .`
2. Use the following command: `yarn commit`
3. Updates remote refs using local refs. Es: `git push`

## Submitting a pull request

Submitting a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) is how a contributor submits changes to the source code of HospitalRun.

When submitting a pull request, an pull request author should make sure that all pull request checks (tests, linting, etc) are passing.

Pull requests descriptions should be filled out with as much detail as necessary to describe the changes. This should include describing the code changes, new features added, bugs fixed, and any new dependencies introduced.  

A core maintainer will review the pull requests changes and will provide feedback. If feedback is requested and the author of the pull request does not follow up on the feedback within 7 days, a core maintainer will then complete the requested changes on behalf of the author and merge the changes in.

If a contributor has a pull request that they would like to have reviewed, but the pull request is not complete, they should add 'WIP' to the beginning of the pull request title and mark the pull request as a [draft](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests).

## Contributor License Agreement

HospitalRun is a member of the [Open JS Foundation](https://openjsf.org/).
As such, we request that all contributors sign our
[contributor license agreement (CLA)](https://openjsf.org/about/the-openjs-foundation-cla/).

For more information about CLAs, please check out Alex Russell’s excellent post,
[“Why Do I Need to Sign This?”](https://infrequently.org/2008/06/why-do-i-need-to-sign-this/).

## Code of Conduct

Before contributing please read the [code of conduct](https://github.com/HospitalRun/hospitalrun/blob/master/.github/CODE_OF_CONDUCT.md)
