import React from 'react'
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage';
import Characters from './CharacterList';


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
    </>
  )
}

export default AppRouter