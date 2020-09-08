import "./Player.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PlacementTable  from 'components/PlacementTable'
import RatingTable from 'components/RatingTable'

function template({ rankingName, playerRanking, playerInfo, totalParticipants, tournaments, tournamentState, ratings, ratingState }) {
  return (
    <div className="player">
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Card>
            <CardHeader title={`Classement dans le ${rankingName}`} />
            <CardContent>
              <Typography variant="h4" component="h1">
                <strong>{playerRanking.name}</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Card>
            <CardHeader title="Classement" />
            <CardContent>{playerRanking.position}/{totalParticipants}</CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardHeader title="Score" />
            <CardContent>{playerRanking.score} pts</CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardHeader title="Matches" />
            <CardContent>{playerInfo.matches.win} - {playerInfo.matches.loss}</CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardHeader title="Sets" />
            <CardContent>{playerInfo.sets.win} - {playerInfo.sets.loss}</CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Card>
            <CardHeader title="Historique des matches"></CardHeader>
            <CardContent>
              <RatingTable ratings={ratings} state={ratingState} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardHeader title="Historique des tournois"></CardHeader>
            <CardContent>
              <PlacementTable tournaments={tournaments} state={tournamentState}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default template;
