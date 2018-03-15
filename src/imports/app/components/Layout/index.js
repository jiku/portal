import Components from '../'
import { Settings } from '../Settings'
import { User } from '../User'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { Connection } from '../Connection'
import { NotFound } from '../NotFound'
import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router'
import { View, Text, StyleSheet } from 'react-native'
import createMemoryHistory from 'history/createMemoryHistory'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'

const history = createMemoryHistory()

const Layout = ({ data: { loading, routes, menu }}) =>
  !loading ? (
    <View style={styles.layout}>
      <Header text={`jiku`}/>
      <Connection />
      <Menu items={menu} />
      <Router history={history}>
        <Fragment>
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
        </Fragment>
      </Router>
    </View>
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

const styles = StyleSheet.create({
  layout: {
    marginTop: `7%`
  }
})

export const LayoutContainer = compose(graphql(GET_LAYOUT))(Layout)