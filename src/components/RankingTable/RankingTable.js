import React from "react";
import template from "./RankingTable.jsx";
import { CircularProgress, Box } from "@material-ui/core";

const RankingTable = ({ ranking, state, rankingId}) => {
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = ranking.length
  const start_at = page * 50
  const stop_at = (page + 1) * 50 
  const displayedRanking =  ranking.slice(start_at, stop_at )

  switch (state) {
    case 'pending':
      return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
      )
    case 'success':
      return template({ displayedRanking, page, handleChangePage, total, rankingId });
    default:
      return ''
  }
}

export default RankingTable;
