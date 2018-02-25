import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import ProjectList from './project-list'
import Parser from './parser'
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

const Base = ({ projects }) =>
  <>
    <h2>Projects</h2>
    <ProjectList projects={ projects } />
  </>

const NotFound = () =>  
  <>
    <h2>Content not found!</h2>
    <h3>Please <Link to={`/contact`}>contact</Link> if you think it's missing.</h3>
  </>

const App = appState => (
  <div className="container">
    <h1>jiku</h1>

    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" render={ () => <Base projects={ appState.projects } /> } />
        <Route exact path="/ama" render={ () => <Parser markdown={ appState.markdown } /> } />
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  </div>
)

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node))

export default App
