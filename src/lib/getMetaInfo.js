import axios from 'axios'

const getMetaInfo = () => {
    const targetHost = process.env.HOST_TARGET
    const targetURI = `${targetHost}/meta`
    
    return (axios.get(targetURI))
}

export default getMetaInfo