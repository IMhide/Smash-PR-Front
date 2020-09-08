import { useEffect, useState }from "react";
import template from "./Player.jsx";
import getCircuitPlayer from 'lib/getCircuitPlayer' 
import getPlayerTournaments from 'lib/getPlayerTournaments' 
import getPlayerRatings from 'lib/getPlayerRatings' 
import { useParams } from "react-router-dom";


const Player =  () =>{
  const { playerId, rankingId } = useParams()

  const [playerRanking, setPlayerRanking] = useState({})
  const [playerState, setPlayerState] = useState('initialised')
  const [playerInfo, setPlayerInfo] = useState({matches: {}, sets: {}}) 
  const [totalParticipants, setTotalParticipants] = useState(0)

  const [tournamentState, setTournamentState] = useState('initialised')
  const [tournaments, setTournaments] = useState([])

  const [ratings, setRatings] = useState([]) 
  const [ratingState, setRatingState] = useState('initilised') 

  const [rankingName, setRankingName] = useState('Ranking')

  useEffect(()=>{
    setPlayerState('pending')
    getCircuitPlayer(rankingId, playerId).then((response) => {
      setPlayerState('success')
      setRankingName(response.data.circuit.name)
      setPlayerRanking(response.data.ranking)
      setTotalParticipants(response.data.circuit_total_participants)
      setPlayerInfo({sets: response.data.sets, matches: response.data.matches })
    }).catch((error) => {
      setPlayerState('error')
      console.log('Something went Wrong')
      console.log(error)
    })
  }, [])

  useEffect(() => {
    setTournamentState('pending')

    getPlayerTournaments(rankingId, playerId).then((response) => {
      setTournamentState('success')
      setTournaments(response.data.data)
    }).catch((error) => {
      setTournamentState('error')
      console.log('Something went wrong')
      console.log(error)
    })

  },[] )
  
  useEffect(() => {
    setRatingState('pending')

    getPlayerRatings(rankingId, playerId).then((response) => {
      setRatingState('success')
      setRatings(response.data.data)
    }).catch((error) => {
      setRatingState('error')
      console.log('Something went wrong')
      console.log(error)
    })
  }, [])

    return template({ rankingName, playerRanking, playerInfo, totalParticipants, tournaments, tournamentState, ratings, ratingState });
}

export default Player;
