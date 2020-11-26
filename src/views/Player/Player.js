import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import template from "./Player.jsx";
import { useParams } from "react-router-dom";
import {
  selectCurrentCircuit,
  updateCurrentCircuitAsync,
  updateId
} from "slices/currentCircuit/currentCirtcuitSlice.js";
import {
  updateCircuitPlayerInfoAsync,
  updatePlayerTournamentsAsync,
  selectCurrentPlayer,
  updatePlayerRatingsAsync,
  updateTournamentsOpponentSearch,
} from "slices/currentPlayer/currentPlayerSlice.js";

const Player = () => {
  const { playerId, rankingId } = useParams()
  const dispatch = useDispatch()
  const player = useSelector(selectCurrentPlayer)
  const circuit = useSelector(selectCurrentCircuit)
  const ratings = player.matches.values
  const search = player.matches.opponentSearch

  useEffect(() => {
    if (rankingId !== circuit.id) {
      dispatch(updateId(rankingId))
      dispatch(updateCurrentCircuitAsync(rankingId))
    }
    dispatch(updateCircuitPlayerInfoAsync(rankingId, playerId))
    dispatch(updatePlayerTournamentsAsync(rankingId, playerId))
    dispatch(updatePlayerRatingsAsync(rankingId, playerId))
  }, [rankingId, playerId, dispatch, circuit.id])

  const handleSearch = (e) => {
    dispatch(updateTournamentsOpponentSearch(e.target.value))
  }

  let displayedRatings = ratings
  if (search.length > 0)
    displayedRatings = ratings.filter((rating) => (rating.opponent.toLowerCase().includes(search)))

  return template({ player, circuit, handleSearch, displayedRatings });
}

export default Player;
