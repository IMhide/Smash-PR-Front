export const updateTournamentsAction = (state, action) => {
    state.tournaments.values = action.payload
} 

export default updateTournamentsAction