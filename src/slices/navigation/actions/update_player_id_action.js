const updatePlayerIdAction = (state, action) => {
  state.player_id = action.payload;
};

export default updatePlayerIdAction;
