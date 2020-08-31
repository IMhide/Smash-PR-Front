import "./RankingTable.css";
import React from "react";
import { Card, CardContent, CardHeader, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow } from "@material-ui/core";

const template = () => {
  return (
    <Card>
      <CardHeader title='Ranking' />
      <CardContent>
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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Glutonny</TableCell>
                <TableCell>9999</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default template;
