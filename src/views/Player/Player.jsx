import "./Player.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PlacementTable from 'components/PlacementTable'
import RatingTable from 'components/RatingTable'

function template({ rankingName, playerRanking, playerInfo, totalParticipants, tournaments, tournamentState, ratings, ratingState, search, handleSearch }) {
  return (
    <div className="player">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Classement" />
            <CardContent>
              <Typography align="center">
                <span className='big_info'>{playerRanking.position}</span>/{totalParticipants}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Score" />
            <Typography align="center">
              <CardContent><span className="big_info">{playerRanking.score}</span> pts</CardContent>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Matches" />
            <Typography align="center">
              <CardContent>
                <span className="big_info green">{playerInfo.matches.win}</span>
                <span className="big_info "> - </span>
                <span className="big_info red">{playerInfo.matches.loss}</span>
              </CardContent>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Sets" />
            <Typography align="center">
              <CardContent>
                <span className="big_info green">{playerInfo.sets.win}</span>
                <span className="big_info" > - </span>
                <span className="big_info red">{playerInfo.sets.loss}</span>
              </CardContent>
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardHeader title="Historique des matches"></CardHeader>
            <CardContent>
              <RatingTable ratings={ratings} state={ratingState} handleSearch={handleSearch} search={search} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardHeader title="Historique des tournois"></CardHeader>
            <CardContent>
              <PlacementTable tournaments={tournaments} state={tournamentState} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
};

export default template;
