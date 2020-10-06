
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Ranking from 'views/Ranking'
import Player from 'views/Player'
import NotFound from 'views/NotFound'
import Faq from 'views/Faq'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Ranking} key='home' />
      <Route exact path='/circuits/:id' component={Ranking} key='ranking-view' />
      <Route exact path='/circuits/:rankingId/players/:playerId' component={Player} key='ranking-view' />
      <Route exact path='/faq' component={Faq} key='ranking-view' />
      <Route component={NotFound} />
    </Switch >
  )
}

export default Router 