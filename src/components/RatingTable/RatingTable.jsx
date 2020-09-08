import "./RatingTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination } from "@material-ui/core";

const template = ({ displayedRatings, page, total, handleChangePage }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Joueur</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRatings.map(rating => (
            <TableRow key={rating.id}>
              <TableCell>{rating.is_winner ? 'W' : 'L'}</TableCell>
              <TableCell>{rating.opponent}</TableCell>
              <TableCell>{rating.winner_score} - {rating.looser_score}</TableCell>
              <TableCell>{rating.score}</TableCell>
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
