const updateCurrentRankingAction = (state, action) => {
  state.current = action.payload[0];
};

export default updateCurrentRankingAction;
