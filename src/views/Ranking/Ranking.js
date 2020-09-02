import { useEffect, useState } from "react"
import template from "./Ranking.jsx";
import getCircuitRanking from 'lib/getCircuitRanking.js'
import getCircuitTournaments from 'lib/getCircuitTournaments.js'

const Ranking = () => {
  const [rankingState, setRankingState] = useState('initial')
  const [ranking, setRanking] = useState([])
  const [cachedRanking, setCachedRanking] = useState([])
  const [tournamentsState, setTournamentsState] = useState('initial')
  const [tournaments, setTournaments] = useState([])
  const [search, setSearch] = useState('')
  const [placement, setPlacement] = useState(false)

  useEffect(() => {
    setRankingState('pending')

    getCircuitRanking(1, placement).then((response) => {
      setCachedRanking(response.data.data)
      setRanking(response.data.data)
      setSearch('')
      setRankingState('success')
    }).catch((error) => {
      setRankingState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [placement])

  useEffect(() => {
    setTournamentsState('pending')

    getCircuitTournaments(1).then((response) => {
      setTournamentsState('success')
      setTournaments(response.data.data)
    }).catch((error) => {
      setTournamentsState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [])

  const handleSearch = (e) => {
    const tmp = e.target.value
    setSearch(tmp)
    if (tmp.length > 0){
      const filteredRanking = cachedRanking.filter((player) => (player['name'].toLowerCase().includes(tmp.toLowerCase())))     
      setRanking(filteredRanking)
    }
    else{
      setRanking(cachedRanking)
    }
  }

  const handlePlacement = () => {
    setPlacement(!placement)
  }
  return template({ ranking, rankingState, tournaments, tournamentsState, search, placement, handlePlacement, handleSearch });
}

export default Ranking;
