import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'

const EpisodeCard = (props) => {

  const { results } = props

  const meta = (
    <p>
      <Icon name='calendar alternate outline' />
      {results.air_date}
    </p>
  )

  const extra = (
    <Label>
      <Icon name="users" />
      {`Characters: ${results.characters.length}`}
    </Label>
  )

  return (
    <Card
      header={results.name}
      meta={meta}
      extra={extra}
      id={results.id}
    />
  )
}

export default EpisodeCard
