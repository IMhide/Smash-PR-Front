export const updateTournamentsAction = (state, action) => {
    state.tournaments.value = action.payload
} 

export default updateTournamentsAction