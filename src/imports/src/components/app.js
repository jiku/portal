import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import ProjectList from './project-list'
import Parser from './parser'

const App = appState => {
  return (<div className="container">
    <h1>jiku</h1>

    <Parser markdown={appState.markdown} />

    <h2>Projects</h2>
    <ProjectList projects={appState.projects} />
  </div>)
}

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node))

export default App
