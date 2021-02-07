# Table of contents

- [General info](#general-info)
- [Used Stack](#used-stack)
- [Development decisions](#development-decisions)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
- [Demo](#demo)
- [Future Enhancement](#future-enhancement)

# General Info

Allows the users to search the `github gists` by user GitHub.
Using Github Gist Api https://docs.github.com/en/rest/reference/gists

When user start typing the app will start searching for this user gists, it will show user card and list of gists.
for each gist also user can check for the forks.

# Used Stack

Created by `Create React App` with Typescript

- React.js
- TypeScript
- SASS

# Development decisions

<b>Why create react app</b>
create react app prepare everything to start modern single page with react
and save a lot of time in setup the build configuration.

<b>SASS</b>
Just pre-processor to simplify and use variables in css.

<b>Components</b>
Separating the components so it will be easy to be reuseable with less logic possible
while sometimes we need to write some logic.

# Folder Structure

```
/src
  ├── api                   # For API calls and types
  ├── helpers               # Utilites for hold helper functions
  ├── hooks
  ├── layout
  |  ├── main-header
  |  ├── components         # All Components
  │      ├── error
  │      ├── forks-list
  │      ├── gist-card
  │      ├── loader
  │      ├── no-results
  │      ├── search-results
  │      ├── user-card
```

# Setup

Install dependencies:

```sh
yarn
```

Run App

```sh
yarn start
```

# Demo

https://github-gists-integration.vercel.app/

# Future Enhancement

- Write unit test
- UI enhancements
- Create generic components for some elements like buttons
