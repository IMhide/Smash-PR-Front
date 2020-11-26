import React from "react";

import {
  TableContainer, Table, TableHead, TableCell, TableBody, TableRow,
  TableFooter, TablePagination, TextField
} from "@material-ui/core";

import "./RatingTable.css";

const template = ({
  displayedRatings, page, total, handleChangePage,
  handleSearch, classes
}) => {
  return (
    <>
      <TextField id="playerName" label="Chercher un opposant" className={classes.searchInput} onChange={handleSearch} />
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
                <TableCell>{rating.is_winner ? <span className="green">W</span> : <span className="red">L</span>}</TableCell>
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
    </>
  );
};

export default template;
