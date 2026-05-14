import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userType: 'brand' | 'creator';
}

const initialState: AuthState = {
  userType: 'brand',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<'brand' | 'creator'>) => {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = authSlice.actions;
export default authSlice.reducer;