const updatePreviousRankingsAction = (state, action) => {
  state.previous = action.payload;
};

export default updatePreviousRankingsAction;
