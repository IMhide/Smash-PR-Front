import "./Player.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PlacementTable from 'components/PlacementTable'
import RatingTable from 'components/RatingTable'

function template({ currentPlayer, ranking, handleSearch, displayedRatings }) {
  return (
    <div className="player">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card>
            <CardHeader title={`Classement dans la ${ranking.name}`} />
            <CardContent>
              <Typography variant="h4" component="h1">
                <strong>{currentPlayer.standing.name}</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <Card>
            <CardHeader title="Classement" />
            <CardContent>
              <Typography align="center">
                <span className='big_info'>{currentPlayer.standing.position}</span>/{ranking.placed_player_count}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <Card>
            <CardHeader title="Score" />
            <CardContent>
              <Typography align="center">
                <span className="big_info">{currentPlayer.standing.score}</span> pts
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <Card>
            <CardHeader title="Matches" />
            <CardContent>
              <Typography align="center">
                <span className="big_info green">{currentPlayer.match_count.won}</span>
                <span className="big_info "> - </span>
                <span className="big_info red">{currentPlayer.match_count.lost}</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card>
            <CardHeader title="Historique"></CardHeader>
            <CardContent>
              <RatingTable ratings={[]} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
};

export default template;
