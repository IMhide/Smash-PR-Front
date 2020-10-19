import axios from 'axios'

const getCircuitRanking = (circuit_id, placement = false) => {
    const targetParams = placement ? '?placement=true' : ''
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/${circuit_id}/rankings${targetParams}`
    
    return (axios.get(targetURI))
}

export default getCircuitRanking 