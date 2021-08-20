import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  menuState: false,
};

export const phoneVerificationSlice = createSlice({
  name: 'phoneVerification',
  initialState,
  reducers: {
    SET_STATE: (state, action) => {
      state.menuS = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {SET_STATE} = phoneVerificationSlice.actions;

export default phoneVerificationSlice.reducer;
