import React from "react";
import template from "./TournamentTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";

const tournamentsPerPage = 5;

const TournamentTable = ({ tournaments }) => {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const total = tournaments.length;
  const start_at = page * tournamentsPerPage;
  const stop_at = (page + 1) * tournamentsPerPage;
  const displayedTournaments = tournaments.slice(start_at, stop_at);

  return template({ displayedTournaments, page, total, handleChangePage });
};

export default TournamentTable;
