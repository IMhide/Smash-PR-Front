import axios from 'axios'

const getCircuitRanking = (circuit_id, placement = false) => {
    const targetParams = placement ? '?placement=true' : ''
    console.log(process.env)
    const targetHost = process.env.REACT_APP_HOST_TARGET
    const targetURI = `${targetHost}/circuits/${circuit_id}/rankings${targetParams}`
    
    return (axios.get(targetURI))
}

export default getCircuitRanking 