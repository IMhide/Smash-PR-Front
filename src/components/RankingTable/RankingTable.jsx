import "./RankingTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination, Tooltip } from "@material-ui/core";
import { Link } from 'react-router-dom'
import placement from 'assets/images/placement.png'


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
            <TableRow key={player['id']} className={player['match_count'] < 12 ? 'placement-row' : ''}>
              <TableCell>{player['position']}</TableCell>
              <TableCell>
                <Link to={{ pathname: `/circuits/${rankingId}/players/${player['id']}` }}>
                  {player['name']}
                </Link>
                {player['match_count'] < 12 ?
                  <Tooltip title="Classement temporaire" placement='left' arrow>
                    <img src={placement} className='placement-logo' alt='placement-logo' />
                  </Tooltip>
                  :
                  ''}

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
