import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import ProjectList from './project-list'
import Parser from './parser'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Menu } from './Menu'
import { NotFound } from './NotFound'

const browserHistory = createBrowserHistory()

const Base = ({ projects }) =>
  <>
    <h2>Projects</h2>
    <ProjectList projects={ projects } />
  </>

const components = {
  base: Base,
  parser: Parser
}

const App = appState => (
  <div className="container">
    <h1>jiku</h1>
    <Menu items={appState.menu} />
    <Router history={browserHistory}>
      <Switch>
        {
          appState.routes.map(r => {
            if (r.component) {
              const data = {}
              r.data.map(x => data[x.key] = appState[x.value])
              const Component = components[r.component]
              return <Route key={`${r.id}`} exact path={`${r.url}`} render={ () => <Component {...data} /> } />
            } else {
              return <Route key={`${r.id}`} exact path={`${r.url}`} />
            }
          })
        }
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  </div>
)

App.render = R.curry((node, props) => ReactDOM.render(<App {...props}/>, node))

export default App
