import axios from "axios";

const getPlayerRankingInfos = (rankingId, playerId) => {
  const targetHost = process.env.REACT_APP_HOST_TARGET;
  const targetURI = `${targetHost}/v1/rankings/${rankingId}/player/${playerId}`;

  return axios.get(targetURI);
};

export default getPlayerRankingInfos;
