import axios from 'axios'

const getPlayerRatings = (rankingId, playerId) => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/${rankingId}/players/${playerId}/ratings`
    
    return (axios.get(targetURI))
}

export default getPlayerRatings