import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getPlayerRankingTournaments from "lib/getPlayerRankingTournaments";
import { selectNavigation } from "slices/navigation/navagationSlice.js";
import template from "./RatingTable.jsx";

const tournamentsPerPage = 10;

const RatingTable = ({ rankingId, playerId }) => {
  const [page, setPage] = React.useState(0);
  const [tournaments, setTournaments] = React.useState([]);
  const navigation = useSelector(selectNavigation);
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (navigation.player_id && navigation.ranking_id)
      getPlayerRankingTournaments(
        navigation.ranking_id,
        navigation.player_id
      ).then((response) => setTournaments(response.data));
  }, [navigation.player_id, navigation.ranking_id, playerId, rankingId]);

  const total = tournaments.length;
  const start_at = page * tournamentsPerPage;
  const stop_at = (page + 1) * tournamentsPerPage;
  const displayedTournaments = tournaments.slice(start_at, stop_at);

  return template({
    displayedTournaments,
    page,
    total,
    handleChangePage,
  });
};

export default RatingTable;
