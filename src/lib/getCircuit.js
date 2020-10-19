import axios from 'axios'

const getCircuit = (id) => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/${id}.json`
    
    return (axios.get(targetURI))
}

export default getCircuit