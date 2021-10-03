import getRankings from "lib/getRankings";
import { updateCurrentRanking, updatePreviousRankings } from "./rankingsSlice";

const updateRankingsAsyncAction = () => (dispatch) => {
  getRankings().then((response) => {
    dispatch(updatePreviousRankings(response.data));
    dispatch(updateCurrentRanking(response.data));
  });
};
export default updateRankingsAsyncAction;
