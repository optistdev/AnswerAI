import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface VariablesState {
  selectedVariables: Array<String>;
}

const initialState: VariablesState = {
  selectedVariables: [],
};

export const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    setSelectedVariables: (state, action: PayloadAction<Array<String>>) => {
      state.selectedVariables = action.payload;
    },
  },
});

export const { setSelectedVariables } = variablesSlice.actions;
export default variablesSlice.reducer;
