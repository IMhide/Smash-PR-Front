const updateRankingAction = (state, action) => {
    state.ranking.standing = action.payload
}

export default updateRankingAction