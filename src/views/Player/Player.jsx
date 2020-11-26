import "./Player.css";
import React from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PlacementTable from 'components/PlacementTable'
import RatingTable from 'components/RatingTable'

function template({ player, circuit, handleSearch, displayedRatings }) {
  return (
    <div className="player">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card>
            <CardHeader title={`Classement dans le ${circuit.name}`} />
            <CardContent>
              <Typography variant="h4" component="h1">
                <strong>{player.name}</strong>
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
                <span className='big_info'>{player.stats.position}</span>/{player.participantsCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Score" />
            <CardContent>
              <Typography align="center">
                <span className="big_info">{player.stats.score}</span> pts
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Matches" />
            <CardContent>
              <Typography align="center">
                <span className="big_info green">{player.stats.matches.win}</span>
                <span className="big_info "> - </span>
                <span className="big_info red">{player.stats.matches.loss}</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
          <Card>
            <CardHeader title="Sets" />
            <CardContent>
              <Typography align="center">
                <span className="big_info green">{player.stats.sets.win}</span>
                <span className="big_info" > - </span>
                <span className="big_info red">{player.stats.sets.loss}</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardHeader title="Historique des matches"></CardHeader>
            <CardContent>
              <RatingTable ratings={displayedRatings}
                state={player.matches.apiCallState}
                handleSearch={handleSearch}
                search={player.matches.opponentSearch} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card>
            <CardHeader title="Historique des tournois"></CardHeader>
            <CardContent>
              <PlacementTable tournaments={player.tournaments.values} state={player.tournaments.apiCallState} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div >
  );
};

export default template;
