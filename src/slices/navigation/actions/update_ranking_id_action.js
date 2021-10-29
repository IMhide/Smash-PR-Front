const updateRankingIdAction = (state, action) => {
  state.ranking_id = action.payload;
};

export default updateRankingIdAction;
