import React, { createElement } from 'react'
import R from 'ramda'
import marksy from 'marksy'
import Loading from 'react-loading'

const { PropTypes, Component } = React

const Markdown = marksy({
  createElement,
  elements: {
    h1 ({id, children}) {
      return <h1 id={id} style={{fontFamily: 'jikutypeVector', fontSize: '8px', color: '#97f', textTransform: 'lowercase', padding: '2em 0em'}}>{children}</h1>
    }
  }
})

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    { children }
  </div>
</div>)

// const File = (loading, markdown) => (<div>
const File = markdown => {
  if (!markdown) {
    return <Loading type='spin' color='#eee' />
  } else {
    return (<div>
      { Markdown(markdown).tree }
    </div>)
  }
}

// export const Parser = R.compose(Container, File, R.props(['loading', 'markdown']))
export const Parser = R.compose(Container, File, R.prop('markdown'))