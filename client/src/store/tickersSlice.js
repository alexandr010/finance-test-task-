import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  disabled: [],
};

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    },
    setDisabled: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.disabled = [...action.payload];
    },
  },
});

export const { setData, setDisabled } = tickersSlice.actions;

export default tickersSlice.reducer;
