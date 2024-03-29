import "./Ranking.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent } from '@material-ui/core'
import RankingTable from 'components/RankingTable'
import RankingSearch from 'components/RankingSearch'
import TournamentTable from 'components/TournamentTable'

function template({ classes, displayedRanking, displayedStanding, handleSearch, handlePlacement}) {
  return (
    <div className="ranking">
      <Grid container spacing={3}>
        <Grid item  xs={12} sm={12} md={7} lg={8} xl={8}>
          <Card>
            <CardHeader title={displayedRanking.name} />
            <CardContent>
              <RankingTable standing={displayedStanding}  rankingId={displayedRanking.id} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <RankingSearch handleSearch={handleSearch} handlePlacement={handlePlacement} />
          <Card className={classes.tournamentBox}>
            <CardHeader title='Tournois' />
            <CardContent>
              <TournamentTable tournaments={displayedRanking.tournaments} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
   </div>
  );
};

export default template;
