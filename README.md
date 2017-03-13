# jiku: site

Base site for `jiku` (apps).

## STATE

### Private assets (MD, SVG) but not JS to client (2017-03-12 10:11)

Something weird.
Can't use dynamic import * from 'module' for something (untracked) in /private?
Can't use dynamic import(moduleAsVariable) or require(moduleAsVariable) for a variable containing a module? 

### Using Meteor edge (2016-10-19 00:50)

`bump` updates so `start` can be used. `start:edge` doesn't.
Find a way to use vars and reuse nested scripts in `package.json`, etc (so current becomes arg for last, etc)?

### TODO: PNG to SVG for buttons (2016-10-17)

Getting closer.

### CSS to styled-components for buttons (2016-10-17 ~01:00)

### Fetch assets (MD, SVG) from server using [Meteor methods, async/await, promises] (2016-10-14 11:02)

Added async fetching of Markdown from server (through Meteor methods and (server-only) Asset API). Can't do import/require on the client with Meteor? See [Meteor: Forums: Importing Assets - Image](https://forums.meteor.com/t/importing-assets-image/30266/2?u=jiku). Made notes and video too (search `meteor react ramda asset` or see `../Notes`).

### Setup/origin (2016-10-09 13:10)

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
