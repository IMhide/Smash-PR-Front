import React from "react";
import template from "./RankingSearch.jsx";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  searchInput: {
    width: '100%'
  }
})

const RankingSearch = () => {
  const classes = useStyle()
  return template({ classes });
}

export default RankingSearch;
