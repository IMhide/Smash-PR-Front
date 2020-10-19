import axios from 'axios'

const getMajorCircuits = () => {
    const targetHost = process.env.REACT_APP_HOST_TARGET
    const targetURI = `${targetHost}/circuits/majors.json`
    
    return (axios.get(targetURI))
}

export default getMajorCircuits