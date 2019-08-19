import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react'

const CharacterCard = (props) => {

  const { results } = props

  const extra = (
    <Label>
      <Icon
        name="film"
        size="big" />
      {`Episodes: ${results.episode.length}`}
    </Label>
  )

  const meta = (
    <ul>
      <li>{`Species: ${results.species}`}</li>
      <li>{`Gender: ${results.gender}`}</li>
      <li>{`Status: ${results.status}`}</li>
      <li>{`Origin: ${results.origin.name}`}</li>
      <li>{`Location: ${results.location.name}`}</li>
    </ul>
  )

  return (
    <Card
      image={results.image}
      header={results.name}
      meta={meta}
      extra={extra}
      id={results.id}
    />
  )
}

export default CharacterCard