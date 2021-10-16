import "./RankingTable.css";
import React from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, TableFooter, TablePagination, Tooltip } from "@material-ui/core";
import { Link } from 'react-router-dom'
import placement from 'assets/images/placement.png'


const template = ({ displayedStanding, page, handleChangePage, total, rankingId}) => {

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
          {displayedStanding.map(player => (
            <TableRow key={`player_${rankingId}_${player.id}`}>
              <TableCell>{player.position}</TableCell>
              <TableCell>
                <Link to={{ pathname: `/circuits/${rankingId}/players/${player.id}` }}>
                  {player.name}
                </Link>
                {false ?
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
