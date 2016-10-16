# jiku: site

Base site for `jiku` (apps).

## STATE

### 2016-10-14 11:02

Got it to work through Meteor.methods, etc. Server assets.
Made a video about it. Search for Meteor, React, Ramda, assets, etc. (tags?)

// NOTE: Seems the whole MTC thing has to be inside an async function to use await within it... [Support async/await by gaearon · Pull Request #327 · facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app/pull/327)

// const MarkdownFile = Assets.getText('/Simple.md') // Assets is only on the server // [Assets | Meteor API Docs](http://docs.meteor.com/api/assets.html#Assets-getText)

```javascript
// I promisified `github.users.get` which is asynchronous
// function getUserData() {
//   return new Promise(function (resolve, reject) {
//     github.users.get({}, function (err, res) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res)
//       }
//     });
//   });
// }

const getUserEmails = async () => {
  return await new Promise(function (resolve, reject) {
    const song = "yeah"
    if (song) {
    setTimeout(() => {
      resolve(`Hey, I think I know that one! That looks like it's by ${ song.artist }. Here are the lyrics:\n\n`)
    }, 2000)
  } else {
    setTimeout( () => {
      reject("Sorry to let you down, but I couldn't find that song :(")
    }, 2000)
  }

    // github.users.getEmails({}, function (err, res) {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     resolve(res)
    //   }
    // });
  });
}

(async function () {
  // let userData = await getUserData(); // stuck
  let emails = await getUserEmails()
  console.log("emails", emails)

  // let user = Meteor.call("getUser", { name: "Simple" }, (err, data) => data)
  // let user = await Meteor.call("getUser", { name: "Simple" }, (err, data) => data)
  // let user = await Meteor.call("getUser", { name: "Simple" }, Promise.all((err, data) => data))
  // let user = Meteor.call("getUser", { name: "Simple" }, await Promise.all(async (err, data) => await data))
  // let user = Meteor.call("getUser", { name: "Simple" }, (err, data) => await data)
  // console.log(user)
  let user = async () => await Meteor.call("getUser", { name: "Simple" }, async (err, data) => await data)
  let userResolved = await user()
  console.log("users", userResolved)
}())

// //Promise should be available globally if you have ecmascript package (i guess it has dependency to promise package)
// import {Promise} from 'meteor/promise';
// //npm install request
// import request from 'request';
// //consider you have a an async function, make it return a Promise
// const get = (url) =>{
//   return new Promise( (resolve,reject)=>{
//     request( url, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         resolve(body)
//       }else{
//         reject(error)
//       }
//     });
//   });
// }


//   async getUser(yeah) {
//     return await new Promise(function (resolve, reject) {
//       const song = "yeah"
//       if (song) {
//         setTimeout(() => {
//           resolve(`Hey, I think I know that one! That looks like it's by ${ song.artist }. Here are the lyrics:\n\n`)
//         }, 2000)
//       } else {
//         setTimeout( () => {
//           reject("Sorry to let you down, but I couldn't find that song :(")
//         }, 2000)
//       }
//     })
//   }
```

### 2016-10-09 13:10

Copied from `nutrica/app`. Would like to merge that (Ramda, Aphrodite, Storybook, etc) with `jiku/again`.

First is to remove local dev NPM dependencies which make it not run.

---

It uses

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

- Private NPM modules for computing and persisting data.
- Apollo/GraphQL (not really. Connecting to `@jiku/json-fs-db` through file-system for now.)

For info about config files, [this](http://) answer about dev env on my `AMA` covers most of it.
