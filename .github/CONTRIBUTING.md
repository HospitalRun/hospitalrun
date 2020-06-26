# Contributing

HospitalRun is made up of several repositories:

| Repository | Description | Technologies | Link to Repo-specific Contributing Guide |
| --- | --- | --- | --- |
| frontend | Frontend React appllication | [React](https://reactjs.org/), [Redux](https://react-redux.js.org/), [PouchDB](https://pouchdb.com/), [Jest](https://jestjs.io/) | [Link](https://github.com/HospitalRun/hospitalrun-frontend/blob/master/.github/CONTRIBUTING.md) |
| components | React building block components | [React](https://reactjs.org/), [TSDX](https://github.com/jaredpalmer/tsdx), [Jest](https://jestjs.io/), [Storybook](https://storybook.js.org/) | [Link](https://github.com/HospitalRun/components/blob/master/.github/CONTRIBUTING.md) |
| server | Host the service | [NodeJs](https://nodejs.org/en/), [Fastify](https://www.fastify.io/), [CouchDB](https://couchdb.apache.org/) | [Link](https://github.com/HospitalRun/hospitalrun-server/blob/master/.github/CONTRIBUTING.md) |
| core | Host core models | [Typebox](https://github.com/sinclairzx81/typebox) | [Link](https://github.com/HospitalRun/hospitalrun-core/blob/master/.github/CONTRIBUTING.md) |

Note: We use [TypeScript](https://www.typescriptlang.org/).

# Contributing Guide for All Repos

Repo-specific contributing guides are listed in the above table for easy access.

Also, you are encouraged to reach out to the community of contributors for questions and feedback. See you in [Slack](https://hospitalrun-slack.herokuapp.com).

## 1. Browse Issues

Interested in working on the HospitalRun codebase? The Issues tab in each repository is the best spot to begin looking for work. Issues with the `help wanted` label indicate that the issue is open for a contributor to work on. Looking for an aggregation of all open issues in the HospitalRun project, check this [link](https://hospitalrun.github.io/ubersicht/?showOpen=true&showClosed=false&showCommented=true&showUncommented=true&showIssues=true&showPullRequests=true&last24Hours=false&repos=null&labels=null&milestones=null&usernames=null#hospitalrun) out.

## 2. Get Assigned an Issue

To request an issue be assigned to you, leave a comment on the issue indicating you'd like to work on it! A core maintainer will then assign the issue to you, indicating that you are the one that will work on it.

Note: In order to support as many contributors as possible, we will try to assign one issue per contributor at a time.

Note: If a contributor has been assigned an issue for more than 14 days and there has been no activity, a core maintainer will leave a comment asking about the status of the issue. If there is no response in 7 days, then the issue will be unassigned and marked as `help wanted`.

## 3. Fork the Repository and Create a Branch

1. [Fork the repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
2. [Create a branch](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work)

## 4. Commit Changes

1. Stage all pending changes: `git add .`
2. Commit the changes: `npm run commit`
3. Push the changes: `git push`

Note: All repos use [conventional commits](https://www.conventionalcommits.org) and [semantic-release](https://github.com/semantic-release/semantic-release)

## 5. Submit a Pull Request

You can [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) to submit changes to the source code. Please take a moment to see if your pull request is incomplete or complete:

| Pull Request is... | Description | Need to add tests? | Need to pass checks? |
| --- | --- | --- | --- |
| Incomplete | You have questions.<br>It is a partial implementation.<br>You plan to refactor later. etc. | No | No |
| Complete | It is ready for production. | Yes | Yes |

If incomplete, add 'WIP' to the beginning of the pull request title and mark the pull request as a [draft](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests).

Once submitted, a core maintainer will review the pull request and provide feedback.

Note: If feedback is requested and the author of the pull request does not follow up on the feedback within 7 days, a core maintainer will then complete the requested changes on behalf of the author and merge the changes in.

## Contributor License Agreement

HospitalRun is a member of the [Open JS Foundation](https://openjsf.org/).
As such, we request that all contributors sign our
[contributor license agreement (CLA)](https://openjsf.org/about/the-openjs-foundation-cla/).

For more information about CLAs, please check out Alex Russell’s excellent post,
[“Why Do I Need to Sign This?”](https://infrequently.org/2008/06/why-do-i-need-to-sign-this/).

## Code of Conduct

Before contributing please read the [code of conduct](https://github.com/HospitalRun/hospitalrun/blob/master/.github/CODE_OF_CONDUCT.md)

