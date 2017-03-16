import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import App from '../imports/src/components/app'
import Asset from '../imports/asset'

let appState = {
  parser: {
    loading: {
      state: true
    },
    markdown: undefined
  }
}

const setup = async () => {
  const render = appState => App.render(document.getElementById('app'), appState)

  // setInterval(() => {
  //   render(appState)
  // }, 1000)

  appState.projects = JSON.parse(await Asset('Projects.json'))

  render(appState)

  appState.markdown = await Asset('Sweetie.md')

  appState.projects = JSON.parse(await File('Projects.json'))
  appState.markdown = await File('Sweetie.md')

  const SVG = await File('rocket.svg')
  console.log(SVG)

  render(appState)
}

Meteor.startup(() => {
  setup()
})
