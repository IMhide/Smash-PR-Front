export const updateMatchesStatsAction = (state, action) => {
    state.stats.matches = action.payload
} 

export default updateMatchesStatsAction