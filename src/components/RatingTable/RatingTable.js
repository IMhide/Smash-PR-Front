import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const ratingsPerPage = 10;

const RatingTable = ({ ratings, state, handleSearch }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default RatingTable;
