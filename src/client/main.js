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
  appState.routes = JSON.parse(await Asset('Routes.json'))
  appState.menu = JSON.parse(await Asset('Menu.json'))

  render(appState)

  appState.markdown = await Asset('Sweetie.md')

  render(appState)
}

Meteor.startup(() => {
  setup()
})
