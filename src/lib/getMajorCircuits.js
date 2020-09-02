import axios from 'axios'

const getMajorCircuits = () => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/circuits/majors.json`
    
    return (axios.get(targetURI))
}

export default getMajorCircuits