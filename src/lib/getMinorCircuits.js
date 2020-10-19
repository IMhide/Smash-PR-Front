import axios from 'axios'

const getMinorCircuits= (circuit_id) => {
    const targetHost = process.env.REACT_APP_HOST_TARGET
    const targetURI = `${targetHost}/circuits/cities.json`
    
    return (axios.get(targetURI))
}

export default getMinorCircuits