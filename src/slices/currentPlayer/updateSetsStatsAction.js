export const updateSetsStatsAction = (state, action) => {
    state.stats.sets = action.payload
} 

export default updateSetsStatsAction