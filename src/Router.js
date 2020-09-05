
import React from 'react'
import { useRouteMatch, Route, Switch } from "react-router-dom";
import Ranking from 'views/Ranking'
import Player from 'views/Player'
import NotFound from 'views/NotFound'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Ranking} key='home' />
      <Route exact path='/rankings/:id' component={Ranking} key='ranking-view' />
      <Route exact path='/rankings/:rankingId/players/:playerId' component={Player} key='ranking-view' />
      <Route component={NotFound} />
    </Switch >
  )
}

export default Router 