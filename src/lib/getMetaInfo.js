import axios from 'axios'

const getMetaInfo = () => {
    const targetHost = process.env.REACT_APP_HOST_TARGET
    const targetURI = `${targetHost}/meta`
    
    return (axios.get(targetURI))
}

export default getMetaInfo