import { client } from './data/client'
import { LayoutContainer as Layout } from './components/Layout'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

export const App = <ApolloProvider client={client}><Layout /></ApolloProvider>