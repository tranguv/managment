import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  user: {},
  loading: false,
  isAuthenticated: false,
  // error: null,
  // success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = true;
    },
    signOut: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // createAccount: (state, action) => {
    //   state.user = action.payload;
    //   state.isAuthenticated = true;
    //   state.loading = false;
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(signIn.pending, (state) => {
  //     state.loading = true;
  //     state.error = null;
  //     state.success = false;
  //   });
  //   builder.addCase(signIn.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.user = action.payload.data;
  //     state.success = true;
  //   });
  //   builder.addCase(signIn.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   });
  //   builder.addCase(createAccount.pending, (state) => {
  //     state.loading = true;
  //     state.error = null;
  //     state.success = false;
  //   });
  //   builder.addCase(createAccount.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.user = action.payload.data;
  //     state.success = true;
  //   });
  //   builder.addCase(createAccount.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   });
  // },
});

export const { signIn, createAccount } = userSlice.actions;
export default userSlice.reducer;
