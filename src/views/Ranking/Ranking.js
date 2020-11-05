import { useEffect, useState } from "react"
import template from "./Ranking.jsx";
import { useParams } from "react-router-dom";

import useStyle from './Ranking.style'
import { selectMetaDatas } from 'slices/metaDatas/metaDatasSlice'
import { useSelector, useDispatch } from "react-redux";
import {
  updateId, selectCurrentCircuit, updateCurrentCircuitAsync,
  updateTournamentsAsync, updateRankingAsync
} from 'slices/currentCircuit/currentCirtcuitSlice'

const Ranking = () => {
  const { id } = useParams()
  const classes = useStyle()

  const [ranking, setRanking] = useState([])
  const [cachedRanking, setCachedRanking] = useState([])
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
    if (currentCircuit.id === undefined)
      return
    dispatch(updateCurrentCircuitAsync(currentCircuit.id))
    dispatch(updateTournamentsAsync(currentCircuit.id))
    dispatch(updateRankingAsync(currentCircuit.id, placement))
  }, [currentCircuit.id])

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

  return template({ classes, currentCircuit, search, placement, handlePlacement, handleSearch });
}

export default Ranking;
