import { Loader } from '../Indicators/Loader'
import Markdown from '../../../utils/markdown/'
import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import { View, Text, ActivityIndicator } from 'react-native'

const markdownStyles = {
  heading1: {
    fontFamily: 'jikutype-001-Vector',
    fontSize: 3,
    color: 'rgba(153, 119, 255, 1)'
  },
  link: {
    color: 'rgba(119, 255, 153, 1)',
  },
  mailTo: {
    color: 'rgba(119, 255, 153, 1)',
  },
  text: {
    color: '#777',
  }
}

const Component = ({ data: { loading, parser }}) =>
  !loading?
    <View>
      <Markdown styles={markdownStyles}>{ parser.markdown }</Markdown>
    </View>
  :
    <View>
      <Loader />
    </View>

const GET_MARKDOWN = gql`
  {
    parser @client {
      markdown
    }
  }
`

export const Parser = compose(
	graphql(GET_MARKDOWN)
)(Component)