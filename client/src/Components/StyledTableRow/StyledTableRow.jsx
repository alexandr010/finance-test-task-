import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { styled } from '@mui/material/styles';
import { nameTicker } from '../../api/nameTicker';

const TableRowComponent = (prop) => {
  const { ticker } = prop;

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <StyledTableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Typography sx={{ fontWeight: 'bold' }}>
          {nameTicker[ticker.ticker] ?? ticker.ticker}
        </Typography>
        <Chip
          label={ticker.ticker}
          color="primary"
          size="small"
        />
      </TableCell>
      <TableCell align="right">
        {(ticker.price - ticker.change) > 0 ? (
          <ArrowUpwardIcon
            sx={{
              margin: '0 10px', color: 'green',
            }}
          />
        ) : (
          <ArrowDownwardIcon
            sx={{
              margin: '0 10px',
              color: 'red',
            }}
          />
        )}
        {ticker.price}
      </TableCell>
      <TableCell align="right">
        {ticker.change}
      </TableCell>
      <TableCell align="right">
        {ticker.change_percent}
      </TableCell>
      <TableCell align="right">
        {ticker.dividend}
      </TableCell>
    </StyledTableRow>
  );
};

export default TableRowComponent;
