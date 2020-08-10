# Migrate to React Query/Context API/Hooks from Redux

## Status
![Status](https://img.shields.io/badge/status-proposed-yellow)

## Context
Currently, HospitalRun Frontend uses [redux](https://react-redux.js.org/) to manage async data
fetching through [redux thunk](https://github.com/reduxjs/redux-thunk).
It also uses redux for handling the business logic. Redux's main use case is for handling and
managing shared application state. HospitalRun Frontend has almost no shared state across components
since it always goes back to PouchDB/CouchDB for the most recent data. Redux code is often verbose and
contains a lot of boilerplate. Although, HospitalRun Frontend uses [redux toolkit](https://redux-toolkit.js.org/),
the application still has a lot of boilerplate. Due to the limited amount of global application
state, the desire to reduce boilerplate redux code, and new/other libraries available,
Redux is no longer the correct tool.

Redux also makes testing more complicated. Since components that display data (i.e. patient data) are
connected to the redux store, a mock redux store must be provided during tests. This makes it
difficult to isolate testing just to the specific component. For components that save data, it
is difficult to mock the actions that are dispatched.

[react-query](https://github.com/tannerlinsley/react-query) is a library for "handling fetching,
caching, and updating asynchronous data in React". This library has become a popular replacement
for the redux pattern of dispatching an action and storing the result of the data fetch in the redux
store.

For the few uses cases that require global application state (i.e. session information),
the [React Context API](https://reactjs.org/docs/context.html) is an alternative from the
React library. The context API is designed for the use case of sharing state across
components.

## Decision
HospitalRun has chosen to use React Query to manage asynchronous requests for fetching data, the
context api to manage shared application state such as user information, and hooks for sharing
code and business logic.

## Impact/Risks/Consequences
Since HospitalRun v2.0 is still in a development state, there is little risk to refactoring to use
react query, context api, and hooks.

There is a significant amount of refactor work to manage, however the outcome will be an application
that is easier to maintain and contribute to.

Since hooks are just functions, it will be significantly easier to test due to being able to mock
the function and use spies.

At the end of this refactor, no redux related code should exist in the application. All code should
be migrated to a combination of react query hooks and context api for application state.

Although data fetches can be done through regular function calls to the PouchDB library, react-query
is able to help provide a consistent interface for returning errors and help with loading states during
async data fetching. React Query also will serve as a common interface for all async data fetches
regardless of the target.
