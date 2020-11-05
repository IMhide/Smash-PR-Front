import React from "react";
import template from "./TournamentTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";
import {currentCircuitApiCallStates} from 'slices/currentCircuit/currentCirtcuitSlice'

const tournamentsPerPage = 5

const TournamentTable = ({ tournaments, state }) => {
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = tournaments.length
  const start_at = page * tournamentsPerPage
  const stop_at = (page + 1) * tournamentsPerPage 
  const displayedTournaments =  tournaments.slice(start_at, stop_at)

  switch (state) {
    case currentCircuitApiCallStates.SENT:
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )
    case currentCircuitApiCallStates.SUCCESS:
      return template({ displayedTournaments, page, total, handleChangePage });
    default:
      return ''
  }
}

export default TournamentTable;
