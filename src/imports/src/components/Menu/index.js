import React from 'react'

export const Menu = ({ items }) =>
  <div style={{ "display": "grid", "gridAutoFlow": "column" }}>
    {items.map(i =>
      <h2 key={i.id}><a href={`${i.url}`}>{i.name}</a></h2>
    )}
  </div>