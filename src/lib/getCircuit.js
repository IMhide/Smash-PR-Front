import axios from 'axios'

const getCircuit = (id) => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/${id}.json`
    
    return (axios.get(targetURI))
}

export default getCircuit