import React from 'react'
import R from 'ramda'
import MTRC from 'markdown-to-react-components'
import Loading from 'react-loading'

const { PropTypes, Component } = React

MTRC.configure({
  h1: React.createClass({
    render() {
      return <h1 id={this.props.id} style={{fontFamily: 'jikutypeVector', fontSize: '8px', color: '#97f', textTransform: 'lowercase', padding: '2em 0em'}}>{this.props.children}</h1>
    }
  })
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
      { MTRC(markdown).tree }
    </div>)
  }
}

// const Parser = R.compose(Container, File, R.props(['loading', 'markdown']))
const Parser = R.compose(Container, File, R.prop('markdown'))

export default Parser
