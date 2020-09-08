import axios from 'axios'

const getPlayerTournaments = (rankingId, playerId) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/${rankingId}/players/${playerId}/placements`
    
    return (axios.get(targetURI))
}

export default getPlayerTournaments