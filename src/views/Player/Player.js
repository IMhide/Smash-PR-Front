import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import template from "./Player.jsx";
import getCircuitPlayer from 'lib/getCircuitPlayer'
import getPlayerRatings from 'lib/getPlayerRatings'
import { useParams } from "react-router-dom";
import { selectCurrentCircuit } from "slices/currentCircuit/currentCirtcuitSlice.js";
import {
  updateCircuitPlayerInfoAsync,
  updatePlayerTournamentsAsync,
  selectCurrentPlayer,
  updatePlayerRatingsAsync
} from "slices/currentPlayer/currentPlayerSlice.js";

//
// TODO : Quand une page joueur est chargé
// si le circuit n'est pas load il faut faire une requete
//

const Player = () => {
  const { playerId, rankingId } = useParams()
  const dispatch = useDispatch()
  const player = useSelector(selectCurrentPlayer)
  const circuit = useSelector(selectCurrentCircuit)
  const rankingName = circuit.name
  const playerInfo = player.stats
  const tournaments = player.tournaments.values
  const tournamentState = player.tournaments.apiCallState
  const ratings = player.matches.values 
  const ratingState = player.matches.apiCallState
  const playerRanking = player.stats
  const totalParticipants = player.participantsCount


  const [search, setSearch] = useState('')


  useEffect(() => {
    dispatch(updateCircuitPlayerInfoAsync(rankingId, playerId))
    dispatch(updatePlayerTournamentsAsync(rankingId, playerId))
    dispatch(updatePlayerRatingsAsync(rankingId, playerId))
  }, [rankingId, playerId, dispatch])

  const handleSearch = (e) => {
    const tmp = e.target.value
    setSearch({value: tmp})
  }

  let displayedRatings = ratings 
  if (search.length > 0)
    displayedRatings = ratings.filter((rating) => (rating.opponent.toLowerCase().includes(search.value)))

  return template({
    rankingName, playerRanking, playerInfo, totalParticipants,
    tournaments, tournamentState, ratings, ratingState, search, handleSearch
  });
}

export default Player;
