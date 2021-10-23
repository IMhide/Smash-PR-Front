import axios from "axios";

const getPlayerRankingTournaments = (rankingId, playerId) => {
  const targetHost = process.env.REACT_APP_HOST_TARGET;
  const targetURI = `${targetHost}/v1/rankings/${rankingId}/tournaments?player_id=${playerId}`;

  return axios.get(targetURI);
};

export default getPlayerRankingTournaments;
