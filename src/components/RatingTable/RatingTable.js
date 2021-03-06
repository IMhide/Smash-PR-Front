import React from "react";
import template from "./RatingTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  searchInput: {
    width: '100%'
  }
})

const RatingTable = ({ ratings, state, search, handleSearch }) => {
  const classes = useStyle()
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = ratings.length
  const start_at = page * 10
  const stop_at = (page + 1) * 10 
  const displayedRatings=  ratings.slice(start_at, stop_at )

  switch (state) {
    case 'pending':
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )
    case 'success':
      return template({ classes, displayedRatings, page, total, handleChangePage, search, handleSearch });
    default:
      return ''
  }
}

export default RatingTable;
