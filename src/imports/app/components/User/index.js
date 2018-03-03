import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import { withRouter } from 'react-router-dom'

const updateLocation = ({ path, location, mutate }) => e =>
  mutate({ variables: { location: `${path}` }})

const Button = ({ data: { user }, mutate, history }) => {
  mutate({ variables: { location: `${history.location.pathname}` }})
  return null
}

const GET_USER_LOCATION = gql`
  {
    user @client {
      location
    }
  }
`

const SET_USER_LOCATION = gql`
  mutation setUserLocation($location: String) {
   setUser(location: $location) @client
  }
`

export const User = withRouter(compose(
	graphql(GET_USER_LOCATION),
	graphql(SET_USER_LOCATION)
)(Button))