
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Ranking from 'views/Ranking'
import NotFound from 'views/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Ranking} />
        <Route exact path='/rankings/:id' component={Ranking} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router 