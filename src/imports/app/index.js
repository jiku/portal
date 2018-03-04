import { client } from './data/client'
import { LayoutContainer as Layout } from './components/Layout'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { AppRegistry } from 'react-native'

export const App = () => <ApolloProvider client={client}><Layout /></ApolloProvider>

AppRegistry.registerComponent("App", () => App)
AppRegistry.runApplication("App", { rootTag: document.getElementById("app") })