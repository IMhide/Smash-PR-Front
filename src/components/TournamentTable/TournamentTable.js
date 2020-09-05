import React from "react";
import template from "./TournamentTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";

const TournamentTable = ({ tournaments, state }) => {
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = tournaments.length
  const start_at = page * 5
  const stop_at = (page + 1) * 5 
  const displayedTournaments =  tournaments.slice(start_at, stop_at )

  switch (state) {
    case 'pending':
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )
      break
    case 'success':
      return template({ displayedTournaments, page, total, handleChangePage });
      break
    default:
      return ''
  }
}

export default TournamentTable;
