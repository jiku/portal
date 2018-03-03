import React, { createElement } from 'react'
import { graphql, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import marksy from 'marksy'
import Loading from 'react-loading'

const Markdown = marksy({
  createElement,
  elements: {
    h1 ({id, children}) {
      return <h1 id={id} style={{fontFamily: 'jikutypeVector', fontSize: '8px', color: '#97f', textTransform: 'lowercase', padding: '2em 0em'}}>{children}</h1>
    }
  }
})

const Component = ({ data: { loading, parser }}) =>
  !loading ? (
    <div>
      { Markdown(parser.markdown).tree }
    </div>
  ) : <Loading type='spin' color='#eee' />

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