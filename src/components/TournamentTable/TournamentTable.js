import React from "react";
import template from "./TournamentTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";

const tournamentsPerPage = 5;

const TournamentTable = ({ tournaments, state }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default TournamentTable;
