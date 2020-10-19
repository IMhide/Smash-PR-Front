import axios from 'axios'

const getMajorCircuits = () => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/circuits/majors.json`
    
    return (axios.get(targetURI))
}

export default getMajorCircuits