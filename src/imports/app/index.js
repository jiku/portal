import { client } from './data/client'
import { Layout } from './components/Layout'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import R from 'ramda'

const App = props => <ApolloProvider client={client}><Layout {...props} /></ApolloProvider>

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node))

export default App
