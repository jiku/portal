import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'

const toggleHandler = (connection, mutate) => e =>
	mutate({ variables: { online: !connection.online }})

const Button = ({ data: { loading, connection }, mutate }) =>
!loading ? (
	<button onClick={toggleHandler(connection, mutate)}>{ connection.online ? `OK!` : `!OK` }</button>
) : null

const GET_CONNECTION = gql`
  {
    connection @client {
      online
    }
  }
`

const SET_CONNECTION = gql`
  mutation setOnline($online: Boolean) {
    setConnection(online: $online) @client
  }
`

export const Connection = compose(
  graphql(GET_CONNECTION),
	graphql(SET_CONNECTION)
)(Button)