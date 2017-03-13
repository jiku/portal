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

  render(appState)

  // setInterval(() => {
  //   render(appState)
  // }, 1000)

  appState.markdown = await File('Sweetie.md')

  render(appState)
  const SVG = await File('rocket.svg')
  console.log(SVG)
}

Meteor.startup(() => {
  setup()
})
