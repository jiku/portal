import React from 'react'
import R from 'ramda'
import Button from '../Button'

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
  </div>
  <div className="panel-body">
    {children}
  </div>
</div>)

const List = children => (<div>
  {children}
</div>)

const ListItem = ({ id, image, name, description, url, tags }) => (<div key={id}>
  {/*<div><a href={url}>{image}</a></div>*/}
  <Button props={{name, url}} />
  <div>{description}</div>
  <div className="tags">{tags}</div>
</div>)

export const ProjectList = R.compose(Container, List, R.map(ListItem), R.prop('projects'))