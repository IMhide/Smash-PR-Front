import "./TournamentTable.css";
import React from "react";
import { Card, CardContent, CardHeader, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination } from "@material-ui/core";

const template = ({ classes, displayedTournaments, page, total, handleChangePage }) => {
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
              {displayedTournaments.map(tournament => (
                <TableRow>
                  <TableCell>{tournament[0]}</TableCell>
                  <TableCell>{tournament[1]}</TableCell>
                  <TableCell>{tournament[2]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={false}
                  count={total}
                  rowsPerPage={5}
                  page={page}
                  onChangePage={handleChangePage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default template;
