import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () =>
  <>
    <h2>Content not found!</h2>
    <h3>Please <Link to={`/contact`}>contact</Link> if you think it's missing.</h3>
  </>
