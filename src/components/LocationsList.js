import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'

import PageButtons from './PageButtons';
import axios from 'axios';
import LocationCard from './LocationCard';


const Locations = (props) => {

  const [api, setApi] = useState(`https://rickandmortyapi.com/api/location/`);
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

      <LocationCard
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

export default Locations