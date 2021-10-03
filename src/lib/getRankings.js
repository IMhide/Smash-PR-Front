import axios from "axios";

const getRankings = () => {
  const targetHost = process.env.REACT_APP_HOST_TARGET;
  const targetURI = `${targetHost}/v1/rankings`;

  return axios.get(targetURI);
};

export default getRankings;
