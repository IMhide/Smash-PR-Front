import React from "react";
import template from "./RankingTable.jsx";
import { CircularProgress, Box } from "@material-ui/core";

const matchPerPage = 50;

const RankingTable = ({ standing, rankingId }) => {
  return template({
    standing,
  });
};

export default RankingTable;
