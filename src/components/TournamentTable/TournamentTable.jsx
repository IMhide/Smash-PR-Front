import "./TournamentTable.css";
import React from "react";
import { Card, CardContent, CardHeader, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";

const template = ({classes}) => {
  return (
    <Card className={classes.tournamentBox}>
      <CardHeader title='Tournois' />
      <CardContent>
        <TableContainer >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tournois</TableCell>
                <TableCell>Tier</TableCell>
                <TableCell>Participants</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Wanted</TableCell>
                <TableCell>S</TableCell>
                <TableCell>128</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default template;
