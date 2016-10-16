# jiku: site

Base site for `jiku` (apps).

## STATE

### 2016-10-16 15:25

Idea is to see if you can use named animations with keyframes, etc, with normal CSS styles. Then maybe those could be ported to inline styles (for React, JS).

### 2016-10-14 11:02

Added async fetching of Markdown from server (through Meteor methods and (server-only) Asset API). Can't do import/require on the client with Meteor? See [Meteor: Forums: Importing Assets - Image](https://forums.meteor.com/t/importing-assets-image/30266/2?u=jiku). Made notes and video too (search `meteor react ramda asset` or see `../Notes`).

### 2016-10-09 13:10

Merged `nutrica/app` (Ramda pipelining React components, TernJS, ESLint, etc) with `jiku/again` (Storybook, Wallaby, etc). Removed pesky local dev NPM dependencies (`/Volumes/Data/Dev` to `/Volumes/Dev` related?). Starting in `src/` with `meteor --release=1.4.2-beta.9 --port 7007` (great rebuild speeds).

---

# PLANS

`Electron` for desktop and `React Native` for mobile.

## BUILD

- `Meteor`
- `Babel`

## LAYERS

### VIEW

- `React` with
  - `Ramda` for functional composition of stateless components
  - `Aphrodite` for inline styles with states (hover, etc.)
  - `Storybook` for UI development

### DATA

- Apollo/GraphQL
