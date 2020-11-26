import React from "react";
import template from "./RatingTable.jsx";
import { Box, CircularProgress } from "@material-ui/core";
import useStyle from './RatingTable.style'
import {currentPlayerApiCallStates} from 'slices/currentPlayer/currentPlayerSlice'

const ratingsPerPage = 10

const RatingTable = ({ ratings, state, handleSearch }) => {
  const classes = useStyle()
  const [page, setPage] = React.useState(0)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const total = ratings.length
  const start_at = page * ratingsPerPage 
  const stop_at = (page + 1) * ratingsPerPage 
  const displayedRatings=  ratings.slice(start_at, stop_at )

  switch (state) {
    case currentPlayerApiCallStates.SENT:
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )
    case currentPlayerApiCallStates.SUCCESS:
      return template({ classes, displayedRatings, page, total, handleChangePage, handleSearch });
    default:
      return ''
  }
}

export default RatingTable;
