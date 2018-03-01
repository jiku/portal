import { ProjectList } from './ProjectList'
import React from 'react'

export const Projects = ({ projects }) =>
  <>
    <h2>Projects</h2>
    <ProjectList projects={ projects } />
  </>
