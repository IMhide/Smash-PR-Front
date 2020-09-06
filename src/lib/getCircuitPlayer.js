import axios from 'axios'

const getCircuitPlayer = (circuit_id, player_id) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/${circuit_id}/players/${player_id}.json`
    
    return (axios.get(targetURI))
}

export default getCircuitPlayer