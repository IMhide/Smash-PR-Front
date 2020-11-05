import React from "react";
import template from "./RankingTable.jsx";
import { CircularProgress, Box } from "@material-ui/core";
import { currentCircuitApiCallStates } from 'slices/currentCircuit/currentCirtcuitSlice'

const matchPerPage = 50

const RankingTable = ({ ranking, state, circuitId}) => {
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = ranking.length
  const start_at = page * matchPerPage 
  const stop_at = (page + 1) * matchPerPage 
  const displayedRanking =  ranking.slice(start_at, stop_at)

  switch (state) {
    case currentCircuitApiCallStates.SENT:
      return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
      )
    case currentCircuitApiCallStates.SUCCESS:
      return template({ displayedRanking, page, handleChangePage, total, circuitId});
    default:
      return null
  }
}

export default RankingTable;