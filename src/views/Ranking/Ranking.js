import React from "react";
import template from "./Ranking.jsx";
import getCircuitRanking from 'lib/getCircuitRanking.js'
import getCircuitTournaments from 'lib/getCircuitTournaments.js'

const Ranking = () => {
  const [rankingState, setRankingState] = React.useState('initial')
  const [ranking, setRanking] = React.useState([])
  const [tournamentsState, setTournamentsState] = React.useState('initial')
  const [tournaments, setTournaments] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [placement, setPlacement] = React.useState(false)


  React.useEffect(() => {
    setRankingState('pending')
    setTournamentsState('pending')

    getCircuitRanking(1).then((response) => {
      setRanking(response.data.data)
      setRankingState('success')
    }).catch((error) => {
      setRankingState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })

    getCircuitTournaments(1).then((response) => {
      setTournamentsState('success')
      setTournaments(response.data.data)
    }).catch((error) => {
      setTournamentsState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [])

  return template({ ranking, rankingState, tournaments, tournamentsState });
}

export default Ranking;
