export const updatePositionAction = (state, action) => {
    state.stats.position = action.payload
} 

export default updatePositionAction