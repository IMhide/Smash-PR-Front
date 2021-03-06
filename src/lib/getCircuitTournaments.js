import axios from 'axios'

const getCircuitTournaments = (circuit_id) => {
    const targetHost = process.env.REACT_APP_HOST_TARGET
    const targetURI = `${targetHost}/circuits/${circuit_id}/tournaments`
    
    return (axios.get(targetURI))
}

export default getCircuitTournaments