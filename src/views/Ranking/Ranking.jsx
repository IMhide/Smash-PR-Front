import "./Ranking.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import RankingTable from 'components/RankingTable'
import RankingSearch from 'components/RankingSearch'
import TournamentTable from 'components/TournamentTable'

function template({ ranking, rankingState, tournaments, tournamentsState }) {
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
          <RankingSearch />
          <TournamentTable tournaments={tournaments} state={tournamentsState}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default template;
