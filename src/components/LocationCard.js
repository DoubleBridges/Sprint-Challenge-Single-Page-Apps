import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'

const LocationCard = (props) => {

  const { results } = props

  const extra = (
    <Label>
      <Icon name='users' />
      {`Residents: ${results.residents.length}`}
    </Label>
  )

  return (
    <Card
      header={results.name}
      meta={results.type}
      description={`Dimension: ${results.dimension}`}
      extra={extra}
      id={results.id}
    />
  )
}

export default LocationCard

