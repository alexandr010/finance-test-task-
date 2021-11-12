import React from 'react';
import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableRowComponent from '../StyledTableRow/StyledTableRow';

const TickersTable = () => {
  const tickersData = useSelector(state => state.tickers.data);
  const disableTicker = useSelector(state => state.tickers.disabled);
  const visibleTickers = tickersData.filter(ticker => (
    !disableTicker.includes(ticker.ticker)
  ));

  const ColorTableHead = styled(TableHead)(() => ({
    backgroundColor: '#0059b2',
  }));

  const styleTableCell = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <ColorTableHead>
            <TableRow>
              <TableCell sx={styleTableCell}>
                Tickers
              </TableCell>
              <TableCell
                sx={styleTableCell}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                sx={styleTableCell}
                align="right"
              >
                Change
              </TableCell>
              <TableCell
                sx={styleTableCell}
                align="right"
              >
                Dividend
              </TableCell>
              <TableCell
                sx={styleTableCell}
                align="right"
              >
                %
              </TableCell>
            </TableRow>
          </ColorTableHead>
          <TableBody>
            {visibleTickers.map(ticker => (
              <TableRowComponent ticker={ticker} key={ticker.ticker} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TickersTable;
