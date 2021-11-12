import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styled from '@mui/material/styles/styled';
import { setDisabled } from '../../store/tickersSlice';
import { nameTicker } from '../../api/nameTicker';

const Navigation = () => {
  const ticketsData = useSelector(state => state.tickers.data);
  const tickerDisabled = useSelector(state => state.tickers.disabled);
  const dispatch = useDispatch();

  const handleDisabled = useCallback((event, ticker) => {
    dispatch(setDisabled(ticker));
  }, [dispatch]);

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(1),
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));

  return (
    <Box sx={{ background: '#f8f9fa' }}>
      <Container>
        <StyledToggleButtonGroup
          value={tickerDisabled}
          onChange={handleDisabled}
          aria-label="text formatting"
        >
          {ticketsData.map(tickers => (
            <ToggleButton
              key={tickers.ticker}
              value={tickers.ticker}
              aria-label={tickers.ticker}
            >
              {nameTicker[tickers.ticker] ?? tickers.ticker}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Container>
    </Box>
  );
};

export default Navigation;
