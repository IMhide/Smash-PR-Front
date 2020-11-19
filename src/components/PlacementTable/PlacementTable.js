import React from "react";
import template from "./PlacementTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";
import {currentPlayerApiCallStates} from 'slices/currentPlayer/currentPlayerSlice'

const tournamentsPerPage = 5

const PlacementTable = ({ tournaments, state }) => {
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = tournaments.length
  const start_at = page * tournamentsPerPage 
  const stop_at = (page + 1) * tournamentsPerPage 
  const displayedTournaments =  tournaments.slice(start_at, stop_at)

  switch (state) {
    case currentPlayerApiCallStates.SENT:
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )
    case currentPlayerApiCallStates.SUCCESS:
      return template({ displayedTournaments, page, total, handleChangePage });
    default:
      return <React.Fragment></React.Fragment>
  }
}

export default PlacementTable;