import React from "react";
import template from "./RankingTable.jsx";
import { CircularProgress, Box } from "@material-ui/core";

const playerPerPage = 50;

const RankingTable = ({ standing, rankingId }) => {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const total = standing.length;
  const start_at = page * playerPerPage;
  const stop_at = (page + 1) * playerPerPage;
  const displayedStanding = standing.slice(start_at, stop_at);

  return template({
    displayedStanding,
    page,
    handleChangePage,
    total,
    rankingId,
  });
};

export default RankingTable;
