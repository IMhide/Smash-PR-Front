import axios from 'axios'

const getMetaInfo = () => {
    const targetHost = 'http://localhost:8080/'
    const targetURI = `${targetHost}/meta`
    
    return (axios.get(targetURI))
}

export default getMetaInfo