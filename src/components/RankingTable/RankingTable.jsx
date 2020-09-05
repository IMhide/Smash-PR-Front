import "./RankingTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination } from "@material-ui/core";
import { Link, useRouteMatch } from 'react-router-dom'


const template = ({ displayedRanking, page, handleChangePage, total, rankingId }) => {

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Position </TableCell>
            <TableCell>Joueur</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRanking.map(player => (
            <TableRow key={player['id']}>
              <TableCell>{player['position']}</TableCell>
              <TableCell>
                <Link to={`${rankingId}/players/${player['id']}`}>
                  {player['name']}
                </Link>
              </TableCell>
              <TableCell>{player['score']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              count={total}
              rowsPerPage={50}
              page={page}
              onChangePage={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer >
  );
};

export default template;
