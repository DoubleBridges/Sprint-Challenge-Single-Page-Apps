import React from 'react'
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage';
import Characters from './CharacterList';
import Locations from './LocationsList';
import Episodes from './EpisodeList';


const AppRouter = () => {

  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact path="/characters"
        render={props => <Characters
          {...props}
        />}
      />
      <Route
        exact path="/locations"
        render={props => <Locations
          {...props}
        />}
      />      <Route
        exact path="/episodes"
        render={props => <Episodes
          {...props}
        />}
      />
    </>
  )
}

export default AppRouter