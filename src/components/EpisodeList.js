import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import axios from 'axios';

import PageButtons from './PageButtons';
import EpisodeCard from './EpisodeCard';


const Episodes = () => {

  const [api, setApi] = useState(`https://rickandmortyapi.com/api/episode/`);
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


  const episodesPage = results.map(episode => {

    return (

      <EpisodeCard
        results={episode}
        key={episode.id}
      />

    )
  })

  return (
    <>
      <Card.Group
        centered
        itemsPerRow={2}>
        {episodesPage}
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

export default Episodes