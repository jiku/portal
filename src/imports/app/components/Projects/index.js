import { ProjectList } from './ProjectList'
import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import Loading from 'react-loading'

const Component = ({ data: { loading, projects }}) =>
  !loading ? (
    <>
      <h2>Projects</h2>
      <ProjectList projects={ projects } />
    </>
  ) : <Loading type='spin' color='#eee' />

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