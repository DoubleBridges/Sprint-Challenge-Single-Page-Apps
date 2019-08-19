import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const EpisodeCard = (props) => {

  const { results } = props

  console.log(results)

  return (
    <Card
      header={results.name}
      id={results.id}
    />
  )
}

export default EpisodeCard
