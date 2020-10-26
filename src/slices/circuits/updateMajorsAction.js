
const updateMajorsAction = (state, action) => {
    state.value.tournaments.majors = action.payload
}

export default updateMajorsAction