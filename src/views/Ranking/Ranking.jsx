import "./Ranking.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import RankingTable from 'components/RankingTable'
import RankingSearch from 'components/RankingSearch'
import TournamentTable from 'components/TournamentTable'

function template({ classes, ranking, rankingState, tournaments, tournamentsState, search, placement, handleSearch, handlePlacement }) {
  return (
    <div className="ranking">
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Card>
            <CardHeader title='Ranking' />
            <CardContent>
              <RankingTable ranking={ranking} state={rankingState} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <RankingSearch search={search} placement={placement} handleSearch={handleSearch} handlePlacement={handlePlacement} />
          <Card className={classes.tournamentBox}>
            <CardHeader title='Tournois' />
            <CardContent>
              <TournamentTable tournaments={tournaments} state={tournamentsState} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default template;
