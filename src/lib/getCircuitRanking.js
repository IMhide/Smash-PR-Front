import axios from 'axios'

const getCircuitRanking = (circuit_id, placement = false) => {
    const targetHost = 'http://localhost:8080/'
    const targetParams = placement ? '?placement=true' : ''
    const targetURI = `${targetHost}/circuits/${circuit_id}/rankings${targetParams}`
    
    return (axios.get(targetURI))
}

export default getCircuitRanking 