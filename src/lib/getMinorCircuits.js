import axios from 'axios'

const getMinorCircuits= (circuit_id) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/cities.json`
    
    return (axios.get(targetURI))
}

export default getMinorCircuits