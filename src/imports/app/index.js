import { Asset } from './data/asset'
import { client } from './data/client'
import { LayoutContainer as Layout } from './components/Layout'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { LinkExternal } from './components/LinkExternal'
import { Projects } from './components/Projects'
import { Parser } from './components/Parser'
import { Settings } from './components/Settings'
import { Connection } from './components/Connection'
import { Button } from './components/Button'
import { NotFound } from './components/NotFound'
import { Static } from './components/Static'
// const ok = require('./gridbg.png') || require('/gridbg.png')

// HACK: Meteor context passed to App/client for React Native to get Meteor assets (through react-native-meteor).
export const App = params => <ApolloProvider client={client(params)}><Layout /></ApolloProvider>

export { Layout, Header, Menu, LinkExternal, Projects, Parser, Button, Connection, Settings, NotFound, Static }