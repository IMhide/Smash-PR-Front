import React from "react";

import {
  TableContainer, Table, TableHead, TableCell, TableBody, TableRow,
  TableFooter, TablePagination
} from "@material-ui/core";

import "./RatingTable.css";

const template = ({
  displayedTournaments, page, total, handleChangePage,
}) => {
  return (
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tournois</TableCell>
              <TableCell>Tier</TableCell>
              <TableCell>Seed</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Match count</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedTournaments.map(tournament => (
              <TableRow key={`ratings_${tournament.id}`}>
                <TableCell>{tournament.name}</TableCell>
                <TableCell>{tournament.tier}</TableCell>
                <TableCell>{tournament.seed}</TableCell>
                <TableCell>{tournament.placement}</TableCell>
                <TableCell>{'5 - 0'}</TableCell>
                <TableCell>{'+666'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[]}
                count={total}
                rowsPerPage={10}
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
