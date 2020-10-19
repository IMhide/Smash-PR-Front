import axios from 'axios'

const getPlayerTournaments = (rankingId, playerId) => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/${rankingId}/players/${playerId}/placements`
    
    return (axios.get(targetURI))
}

export default getPlayerTournaments