import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import 'react-native-web'

meteorInstall({
  node_modules: {
    "react-native": "react-native-web"
  }
})

const init = async () => {
  const { App } = await import('/imports/app/rn')
} 

Meteor.startup(() => init())