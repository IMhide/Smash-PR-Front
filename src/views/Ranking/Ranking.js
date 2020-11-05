import { useEffect, useState } from "react"
import template from "./Ranking.jsx";
import getCircuitRanking from 'lib/getCircuitRanking.js'
import getCircuitTournaments from 'lib/getCircuitTournaments.js'
import getCircuit from 'lib/getCircuit.js'
import { useParams } from "react-router-dom";

import useStyle from './Ranking.style'
import { selectMetaDatas } from 'slices/metaDatas/metaDatasSlice'
import { useSelector, useDispatch } from "react-redux";
import { updateId, selectCurrentCircuit, updateCurrentCircuitAsync } from 'slices/currentCircuit/currentCirtcuitSlice'

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

  const metaDatas = useSelector(selectMetaDatas);
  const currentCircuit = useSelector(selectCurrentCircuit)
  const dispatch = useDispatch();


  useEffect(() => {  // eslint-disable-line
    if (id === undefined) {
      if (metaDatas.currentId !== undefined)
        dispatch(updateId(metaDatas.currentId))
    }
    else
      dispatch(updateId(id))
  });

  useEffect(() => {
    dispatch(updateCurrentCircuitAsync(currentCircuit.id))
  }, [currentCircuit.id])

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
