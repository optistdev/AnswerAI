import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: Boolean;
  isMenuOpen: Boolean;
}

const initialState: LoadingState = {
  isLoading: false,
  isMenuOpen: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Boolean>) => {
      state.isLoading = action.payload;
    },
    setIsMenuOpen: (state, action: PayloadAction<Boolean>) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setLoading, setIsMenuOpen } = loadingSlice.actions;
export default loadingSlice.reducer;
