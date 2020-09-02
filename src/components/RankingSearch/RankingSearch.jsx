import "./RankingSearch.css";
import React from "react";
import { Card, CardContent, CardHeader, TextField, Switch, FormControlLabel } from "@material-ui/core";

const template = ({ classes, search, handleSearch, handlePlacement, placement }) => (
  <Card>
    <CardHeader title="Chercher un joueur" />
    <CardContent>
      <form noValidate autoComplete="off">
        <TextField id="playerName" label="Pseudo" className={classes.searchInput} value={search} onChange={handleSearch} />
        <FormControlLabel label="Joueur en placement"  onChange={handlePlacement} value={placement} control={
          <Switch />
        } />
      </form>
    </CardContent>
  </Card>
);

export default template;
