import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  name: string;
  email: string;
  password: string;
}

const initialState: SignupState = {
  name: "",
  email: "",
  password: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof SignupState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = signupSlice.actions;
export default signupSlice.reducer;
