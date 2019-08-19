import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {

  const { results } = props

  return (
    <Card
      image={results.image}
      header={results.name}
      id={results.id}
    />
  )
}

export default CharacterCard