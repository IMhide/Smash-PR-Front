import "./Ranking.css";
import React from "react";
import { Grid } from '@material-ui/core'
import RankingTable from 'components/RankingTable'
import RankingSearch from 'components/RankingSearch'
import TournamentTable from 'components/TournamentTable'

function template() {
  return (
    <div className="ranking">
      <Grid container spacing={3}>
        <Grid item md={8}>
          <RankingTable />
        </Grid>
        <Grid item md={4}>
          <RankingSearch/>
          <TournamentTable/>
        </Grid>
      </Grid>
    </div>
  );
};

export default template;
