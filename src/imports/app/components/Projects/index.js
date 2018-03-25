import { ProjectList } from './ProjectList'
import { Loader } from '../Indicators/Loader'
import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import { View, Text } from 'react-native'

const Component = ({ data: { loading, projects }}) =>
  !loading ? (
    <View>
      <Text>Projects</Text>
      <ProjectList projects={ projects } />
    </View>
  ) : <Loader />

const GET_PROJECTS = gql`
  {
    projects @client {
      id
      name
      url
      image
      description
    }
  }
`

export const Projects = compose(
	graphql(GET_PROJECTS)
)(Component)