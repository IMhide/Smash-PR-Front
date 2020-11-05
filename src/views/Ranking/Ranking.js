import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMetaDatas } from 'slices/metaDatas/metaDatasSlice'
import { updateSearch, togglePlacement, selectSearch } from 'slices/search/searchSlice'
import {
  updateId, selectCurrentCircuit, updateCurrentCircuitAsync,
  updateTournamentsAsync, updateRankingAsync
} from 'slices/currentCircuit/currentCirtcuitSlice'
import template from "./Ranking.jsx";
import useStyle from './Ranking.style'

const Ranking = () => {
  const { id } = useParams()
  const classes = useStyle()

  const metaDatas = useSelector(selectMetaDatas);
  const currentCircuit = useSelector(selectCurrentCircuit)
  const search = useSelector(selectSearch)
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
  }, [currentCircuit.id, dispatch])

  useEffect(() => {
    dispatch(updateRankingAsync(currentCircuit.id, search.placement))
  }, [currentCircuit.id, search.placement, dispatch])

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value))
  }

  const handlePlacement = () => {
    dispatch(togglePlacement())
  }
  let displayedRanking = currentCircuit.ranking.standing
  if (search.value.length > 0)
    displayedRanking = currentCircuit.ranking.standing.filter((player) => (player.name.toLowerCase().includes(search.value)))

  return template({ classes, currentCircuit, displayedRanking, handlePlacement, handleSearch });
}

export default Ranking;