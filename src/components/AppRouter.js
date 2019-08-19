import React from 'react'
import { Route } from 'react-router-dom'
import WelcomePage from './WelcomePage';

const AppRouter = () => {

  return (
    <>
      <Route exact path="/" component={WelcomePage} />
    </>
  )
}

export default AppRouter