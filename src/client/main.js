import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'

const init = async () => {
  const { App } = await import('/imports/app')
} 

Meteor.startup(() => init())