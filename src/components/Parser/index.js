import { Loader } from '../Indicators/Loader'
import { MarkdownView as Markdown } from 'react-native-markdown-view'
import React from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import { View, Text, SectionList, ActivityIndicator } from 'react-native'

const markdownStyles = {
  text: {
    textAlign: 'center',
    color: '#777',
  },
  heading: {
    fontFamily: 'jikutype-001-Vector',
    color: 'rgba(153, 119, 255, 1)'
  },
  heading1: {
    fontSize: 4
  },
  heading2: {
    fontSize: 3
  },
  heading3: {
    fontSize: 2
  },
  link: {
    color: 'rgba(119, 255, 153, 1)',
  },
  mailTo: {
    color: 'rgba(119, 255, 153, 1)',
  }
}

const headings = {
  match: (source, state, lookbehind) => /^(#{1,6})([^\n]+)/.exec(source),
  // order: () => {},
  // quality: () => 100,
  parse: (capture, nestedParse, state) => {
    return { text: `${capture[1]} ${capture[2]}` };
  },
  render: (node, output, state, styles) => { // FIX: Styles shouldn't be hardcoded but passed by MarkdownView?
  const heading = node.text.split('# ')
  return <Text {...state} style={[styles.text, ...styles.heading, styles[`heading${heading[0].length + 1}`]]}> 
      { heading[1].toLowerCase() }
    </Text>
  }
}

const Component = ({ data: { loading, parser }}) =>
  !loading?
    <SectionList
      renderItem={({item}) => <View style={{ padding: 30 }}><Markdown rules={{ headings }} styles={markdownStyles}>{ item }</Markdown></View>}
      sections={[
        { keyExtractor: (item, index) => `${item}:${index}`, data: [parser.markdown], title: 'AMA'}
      ]}
    />
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