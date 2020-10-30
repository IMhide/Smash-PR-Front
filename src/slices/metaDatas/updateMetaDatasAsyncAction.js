import getMetaInfo from 'lib/getMetaInfo'
import { updateCurrentId, updateAllTimeId } from './metaDatasSlice'

const updateMetaDatasAsyncAction = () => (dispatch) => {
    getMetaInfo().then((response) => {
        dispatch (updateCurrentId(parseInt(response.data["current"], 10)))
        dispatch(updateAllTimeId(parseInt(response.data['all_time'], 10)))
    }).catch((error) => {
        console.log('Something Went Wrong')
        console.log(error)
    })
}

export default updateMetaDatasAsyncAction