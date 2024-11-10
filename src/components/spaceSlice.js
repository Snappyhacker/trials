import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    type: "teamBuilding",
    description: "",
    price: "",
    address: "",
    image: null,
  },
  errors: {},
  isSubmitting: false,
  submitMessage: "",
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitMessage: (state, action) => {
      state.submitMessage = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isSubmitting = false;
      state.submitMessage = "";
    },
  },
});

export const {
  updateFormData,
  setErrors,
  setIsSubmitting,
  setSubmitMessage,
  resetForm,
} = spaceSlice.actions;

export default spaceSlice.reducer;
