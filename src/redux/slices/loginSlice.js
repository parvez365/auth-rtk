import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    redirectTo: null, // where to go after successful login
    isLoginModalOpen: false,
  },
  reducers: {
    openLoginModal: (state, action) => {
      state.isLoginModalOpen = true;
      state.redirectTo = action.payload?.redirectTo ?? null;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
      state.redirectTo = null;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginSlice.actions;

export default loginSlice.reducer;
