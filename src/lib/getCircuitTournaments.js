import axios from 'axios'

const getCircuitTournaments = (circuit_id) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/${circuit_id}/tournaments`
    
    return (axios.get(targetURI))
}

export default getCircuitTournaments