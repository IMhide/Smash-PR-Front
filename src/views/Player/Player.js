import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import template from "./Player.jsx";
import { useParams } from "react-router-dom";
import {
  updatePlayerId,
  updateRankingId,
} from "slices/navigation/navagationSlice.js";
import { Box, CircularProgress } from "@material-ui/core";
import getPlayerRankingInfos from "lib/getPlayerRankingInfos";

const Player = () => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentRanking, setCurrentRanking] = useState(null);
  const dispatch = useDispatch();
  const { playerId, rankingId } = useParams();

  useEffect(() => {
    dispatch(updatePlayerId(playerId));
    dispatch(updateRankingId(rankingId));

    getPlayerRankingInfos(rankingId, playerId).then((response) => {
      setCurrentPlayer(response.data.player_standing);
      setCurrentRanking(response.data.ranking);
    });
  }, [dispatch, playerId, rankingId]);

  if (currentPlayer === null || currentRanking === null)
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  else {
    return template({
      currentPlayer,
      ranking: currentRanking,
    });
  }
};

export default Player;
