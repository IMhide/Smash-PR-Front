import "./PlacementTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination } from "@material-ui/core";

const template = ({ displayedTournaments, page, total, handleChangePage }) => {
  return (
    <TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tournois</TableCell>
            <TableCell>Seed</TableCell>
            <TableCell>Classement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTournaments.map(tournament => (
            <TableRow key={tournament.id}>
              <TableCell>{tournament.tournament}</TableCell>
              <TableCell>{tournament.seed}</TableCell>
              <TableCell>{tournament.placement}</TableCell>
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
