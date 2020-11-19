export const updateMatchesAction = (state, action) => {
    state.matches.values = action.payload
} 

export default updateMatchesAction