import "./RankingSearch.css";
import React from "react";
import { Card, CardContent, CardHeader, TextField, Switch, FormControlLabel } from "@material-ui/core";

const template = ({classes}) => {
  return (
    <Card>
      <CardHeader title="Chercher un joueur" />
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField id="playerName" label="Pseudo" className={classes.searchInput}/>
          <FormControlLabel label="Joueur en placement" control={
            <Switch/>
          } />
        </form>
      </CardContent>
    </Card>
  );
};

export default template;
