import React from 'react'
import { Button } from '../Button2/'
import { StyleSheet } from 'react-native'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'

const toggleHandler = (connection, mutate) => e =>
	mutate({ variables: { online: !connection.online }})

const Component = ({ data: { loading, connection }, mutate }) =>
!loading ? (
	<Button containerStyle={styles.container} contentStyle={styles.content} onPress={toggleHandler(connection, mutate)} title={connection.online ? `OK!` : `!OK`}/>
) : null

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderWidth: 3,
    borderColor: `rgba(255, 255, 255, .3)`,
    borderRadius: 20,
    width: 100
  },
  content: {
    color: 'rgba(153, 255, 119 ,1)',
    fontFamily: 'jikutype-001-Vector',
    fontSize: 3,
  }
})

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
)(Component)