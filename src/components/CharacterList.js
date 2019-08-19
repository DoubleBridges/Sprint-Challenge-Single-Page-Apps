import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'

import CharacterCard from './CharacterCard';
import PageButtons from './PageButtons';
import axios from 'axios';


const Characters = (props) => {

  const [api, setApi] = useState(`https://rickandmortyapi.com/api/character/`);
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(api)
      .then(res => {
        setResults(res.data.results)
        setInfo(res.data.info)
      })
      .catch(err => console.log(err))
  }, [api])

  const prevPageHandler = () => setApi(info.prev)
  const nextPageHandler = () => setApi(info.next)


  const characterPage = results.map(character => {

    return (

      <CharacterCard
        results={character}
        key={character.id}
      />

    )
  })

  return (
    <>
      <Card.Group
        centered
        itemsPerRow={2}>
        {characterPage}
      </Card.Group>
      <PageButtons
        api={api}
        info={info}
        prevPage={prevPageHandler}
        nextPage={nextPageHandler}
      />
    </>
  )

}

export default Characters