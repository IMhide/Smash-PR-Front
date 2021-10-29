import "./TournamentTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination } from "@material-ui/core";

const template = ({ displayedTournaments, page, total, handleChangePage }) => {
  return (
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
            <TableRow key={`tournament_${tournament.id}`}>
              <TableCell>{tournament.name}</TableCell>
              <TableCell>{tournament.tier}</TableCell>
              <TableCell>{tournament.remote_participant_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              count={total}
              rowsPerPage={5}
              page={page}
              onChangePage={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default template;
