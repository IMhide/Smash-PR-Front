import axios from 'axios'

const getPlayerRatings = (rankingId, playerId) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/${rankingId}/players/${playerId}/ratings`
    
    return (axios.get(targetURI))
}

export default getPlayerRatings