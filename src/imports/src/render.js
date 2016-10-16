const ReactDOM = require('react-dom')
const R = require('ramda')

// TODO: Find out where/how/if this is used?

module.exports = R.curry((element, component, props) => {
  return ReactDOM.render(component(props), element)
})
