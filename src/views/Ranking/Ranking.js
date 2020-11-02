import { useEffect, useState } from "react"
import template from "./Ranking.jsx";
import getCircuitRanking from 'lib/getCircuitRanking.js'
import getCircuitTournaments from 'lib/getCircuitTournaments.js'
import getMetaInfo from 'lib/getMetaInfo.js'
import getCircuit from 'lib/getCircuit.js'
import { useParams } from "react-router-dom";
import useStyle from './Ranking.style'

const Ranking = () => {
  const { id } = useParams()
  const classes = useStyle()

  const [rankingId, setRankingId] = useState()
  const [rankingName, setRankingName] = useState('Classement en cours de chargement')
  const [rankingState, setRankingState] = useState('initial')
  const [ranking, setRanking] = useState([])
  const [cachedRanking, setCachedRanking] = useState([])
  const [tournamentsState, setTournamentsState] = useState('initial')
  const [tournaments, setTournaments] = useState([])
  const [search, setSearch] = useState('')
  const [placement, setPlacement] = useState(false)
  const [metaInfo, setMetaInfo] = useState(false)

  useEffect(() => {  // eslint-disable-line
    if (id === undefined)

      setRankingId(metaInfo['current'])
    else
      setRankingId(id)
  });

  useEffect(() => {
    getMetaInfo().then((response) => {
      setMetaInfo(response.data)
    }).catch((error) => {
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [])

  useEffect(() => {
    getCircuit(rankingId).then((response) => {
      const name = response.data.name
      const tier = response.data.category
      setRankingName(`Ranking ${name} - ${tier}`)
    }).catch((error) => {
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [rankingId])

  useEffect(() => {
    setRankingState('pending')
    getCircuitRanking(rankingId, placement).then((response) => {
      setCachedRanking(response.data.data)
      setRanking(response.data.data)
      setSearch('')
      setRankingState('success')
    }).catch((error) => {
      setRankingState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [rankingId, placement])

  useEffect(() => {
    setTournamentsState('pending')
    getCircuitTournaments(rankingId).then((response) => {
      setTournamentsState('success')
      setTournaments(response.data.data)
    }).catch((error) => {
      setTournamentsState('error')
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [rankingId])

  const handleSearch = (e) => {
    const tmp = e.target.value
    setSearch(tmp)
    if (tmp.length > 0) {
      const filteredRanking = cachedRanking.filter((player) => (player['name'].toLowerCase().includes(tmp.toLowerCase())))
      setRanking(filteredRanking)
    }
    else {
      setRanking(cachedRanking)
    }
  }

  const handlePlacement = () => {
    setPlacement(!placement)
  }

  return template({ classes, ranking, rankingState, tournaments, tournamentsState, search, placement, handlePlacement, handleSearch, rankingName, rankingId });
}

export default Ranking;
