import axios from 'axios'

const getCircuitPlayer = (circuit_id, player_id) => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/${circuit_id}/players/${player_id}.json`
    
    return (axios.get(targetURI))
}

export default getCircuitPlayer