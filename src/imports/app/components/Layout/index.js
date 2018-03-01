import Components from '../'
import { Settings } from '../Settings'
import { User } from '../User'
import { Menu } from '../Menu'
import { Connection } from '../Connection'
import { NotFound } from '../NotFound'
import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

export const Layout = appState => (
  <div className="container">
    <h1>jiku</h1>
    <Connection connection={appState.connection} mutate={appState.mutate} />
    <Menu items={appState.menu} />
    <Router history={browserHistory}>
      <>
        <User state={appState.user} mutate={appState.mutate} />
        <Switch>
          {
            appState.routes.map(r => {
              if (r.component) {
                const data = {}
                r.data.map(x => data[x.key] = appState[x.value])
                const Component = Components[r.component]
                return <Route key={`${r.id}`} exact path={`${r.url}`} render={ () => <Component {...data} /> } />
              } else {
                return <Route key={`${r.id}`} exact path={`${r.url}`} />
              }
            })
          }
          <Route key={`settings`} exact path={`/settings`} render={ () => <Settings settings={appState.settings} mutate={appState.mutate} /> } />
          <Route path="*" component={NotFound}/>
        </Switch>
      </>
    </Router>
  </div>
)