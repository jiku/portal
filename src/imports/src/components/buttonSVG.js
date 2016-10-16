import React from 'react'
import R from 'ramda'

const { PropTypes, Component } = React

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    { children }
  </div>
</div>)

// const File = (loading, markdown) => (<div>
const File = props => {
  return (<div>
    <a className="holosmallbtn add-cart add-cart ty-js-add-to-cart" href={ props.url }>
      <span className="holosmallbtn-top abs-overlay trans-02s js-label">{ props.name }</span>
      <span className="holosmallbtn-bottom abs-overlay trans-02s"></span>
    </a>
  </div>)
}

const Parser = R.compose(Container, File, R.prop('props'))

export default Parser
