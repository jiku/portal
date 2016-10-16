import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import App from '../imports/src/components/app'

import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'
import { ApolloProvider } from 'react-apollo'

import App2 from '/imports/ui/App'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MarkdownFile = async (filename) => {
  let d = await new Promise((resolve, reject) => {
    try {
      Meteor.call('markdown.get.async', { filename }, (err, res) => {
        if (err) reject('Something went wrong')
        resolve(res)
      })
    } catch(err) {
      throw new Meteor.Error(err);
    }
  })
  return await d
}

const getSVG = async (path) => {
  return await new Promise((resolve, reject) => {
    Meteor.call('svg.get', { path }, (err, res) => {
      if (err) reject('Something went wrong')
      resolve(res)
    })
  })
}

let appState = {
  projects: [
    {
      id: 1,
      name: "Again",
      description: "Piano-based music.",
      image: "/img/again.png",
      url: "http://jiku.ca/again"
    },
    {
      id: 2,
      name: "EP",
      description: "Electronic music.",
      image: "/img/electronic.png",
      url: "http://jiku.ca/ep"
    },
    {
      id: 3,
      name: "Metal",
      description: "Hard music.",
      image: "/img/metal.png",
      url: "http://jiku.ca/metal"
    }
  ],
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
  // const client = new ApolloClient(meteorClientConfig());
  //
  // ReactDOM.render(
  //   <ApolloProvider client={client}>
  //     <App2 />
  //   </ApolloProvider>,
  //   rootEl
  // )

  const render = appState => App.render(document.getElementById('app'), appState)

  render(appState)

  // setInterval(() => {
  //   render(appState)
  // }, 1000)

  appState.markdown = await MarkdownFile('Sweetie')
  render(appState)
  // const SVG = await getSVG('rocket.svg')
}

Meteor.startup(() => {
  setup()
})
