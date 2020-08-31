import React from "react";
import template from "./TournamentTable.jsx";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => (
  {
    tournamentBox:
    {
      marginTop: theme.spacing(3),
    }
  }
))

const TournamentTable = () => {
  const classes = useStyle()
  return template({ classes });
}

export default TournamentTable;
