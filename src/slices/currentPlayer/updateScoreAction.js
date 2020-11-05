export const updateScoreAction = (state, action) => {
    state.stats.score = action.payload
} 

export default updateScoreAction