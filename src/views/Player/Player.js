import { useEffect, useState }from "react";
import template from "./Player.jsx";
import getCircuitPlayer from 'lib/getCircuitPlayer' 
import { useParams } from "react-router-dom";

const Player =  () =>{
  const { playerId, rankingId } = useParams()

  const [playerRanking, setPlayerRanking] = useState({})
  const [playerState, setPlayerState] = useState('initialised')
  const [playerInfo, setPlayerInfo] = useState({matches: {}, sets: {}}) 
  const [totalParticipants, setTotalParticipants] = useState(0)

  const [rankingName, setRankingName] = useState('Ranking')

  useEffect(()=>{
    setPlayerState('pending')
    getCircuitPlayer(rankingId, playerId).then((response) => {
      setPlayerState('success')
      setRankingName(response.data.circuit.name)
      setPlayerRanking(response.data.ranking)
      setTotalParticipants(response.data.circuit_total_participants)
      setPlayerInfo({sets: response.data.sets, matches: response.data.matches })

      console.log(response.data)
    }).catch((error) => {
      setPlayerState('error')
      console.log('Something went Wrong')
      console.log(error)
    })
  }, [])
    return template({ rankingName, playerRanking, playerInfo, totalParticipants });
}

export default Player;
