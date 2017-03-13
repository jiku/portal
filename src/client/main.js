import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import App from '../imports/src/components/app'

const File = async (filename) => {
  let d = await new Promise((resolve, reject) => {
    try {
      Meteor.call('file.get.async', { filename }, (err, res) => {
        if (err) reject('Something went wrong')
        resolve(res)
      })
    } catch(err) {
      throw new Meteor.Error(err);
    }
  })
  return await d
}

let appState = {
  button: {
    name: 'Again'
  },
  parser: {
    loading: {
      state: true
    },
    markdown: undefined
  }
}

const setup = async () => {
  const render = appState => App.render(document.getElementById('app'), appState)

  // render(appState)

  // setInterval(() => {
  //   render(appState)
  // }, 1000)

  const Projects = await File('Projects.js')
  // appState.projects = await import Projects from '/private/Projects' // File('Projects.js')
  // const Projects = await import("../private/Projects.js");
  // const Projects = await require("/private/Products.js")
  function notCalled() {
    import("Projects")
  }

  appState.projects = import("Projects");
  console.log("projects are", appState.projects)

  appState.markdown = await File('Sweetie.md')

  const SVG = await File('rocket.svg')
  console.log(SVG)

  render(appState)
}

Meteor.startup(() => {
  setup()
})
