import "./Ranking.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import RankingTable from 'components/RankingTable'
import RankingSearch from 'components/RankingSearch'
import TournamentTable from 'components/TournamentTable'

function template({ classes, currentCircuit, displayedRanking, handleSearch, handlePlacement}) {
  return (
    <div className="ranking">
      <Grid container spacing={3}>
        <Grid item  xs={12} sm={12} md={7} lg={8} xl={8}>
          <Card>
            <CardHeader title={currentCircuit.name} />
            <CardContent>
              <RankingTable ranking={displayedRanking} state={currentCircuit.ranking.apiCallState} circuitId={currentCircuit.id} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <RankingSearch handleSearch={handleSearch} handlePlacement={handlePlacement} />
          <Card className={classes.tournamentBox}>
            <CardHeader title='Tournois' />
            <CardContent>
              <TournamentTable tournaments={currentCircuit.tournaments.value} state={currentCircuit.tournaments.apiCallState} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
   </div>
  );
};

export default template;