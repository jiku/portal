import Components from '../'
import { Settings } from '../Settings'
import { User } from '../User'
import { Menu } from '../Menu'
import { Connection } from '../Connection'
import { NotFound } from '../NotFound'
import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'

const browserHistory = createBrowserHistory()

const Layout = ({ data: { loading, routes, menu }}) =>
  !loading ? (
    <div className="container">
      <h1>jiku</h1>
      <Connection />
      <Menu items={menu} />
      <Router history={browserHistory}>
        <>
          <User />
          <Switch>
            { routes ?
              routes.map(r => {
                if (r.component) {
                  const data = {}
                  r.data.map(x => data[x.key] = routes[x.value])
                  const Component = Components[r.component]
                  return <Route key={`${r.id}`} exact path={`${r.url}`} render={ () => <Component {...data} /> } />
                } else {
                  return <Route key={`${r.id}`} exact path={`${r.url}`} />
                }
              })
            : null }
            <Route key={`settings`} exact path={`/settings`} render={ () => <Settings /> } />
            <Route path="*" component={NotFound}/>
          </Switch>
        </>
      </Router>
    </div>
  ) : null

const GET_LAYOUT = gql`
  {
    routes @client {
      id
      name
      url
      component
      data
    }
    menu @client {
      id
      name
      url
    }
  }
`
export const LayoutContainer = compose(graphql(GET_LAYOUT))(Layout)