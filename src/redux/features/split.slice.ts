import { createSlice } from "@reduxjs/toolkit";
import { ISplit } from "../../interfaces/SplitInterface";
import { personIdGenerator } from "../../utils/IdGenerator";
import { RootState } from "../store";

export interface SplitState {
  loading: boolean;
  error: string | null;
  success: boolean;
  splits: ISplit[];
}

export const initialState: SplitState = {
  loading: false,
  error: null,
  success: false,
  splits: [],
};

export const splitSlice = createSlice({
  name: "split",
  initialState,
  reducers: {
    setSplitId: (state, action) => {
      //if its already there, do nothing
      const splitIndex = state.splits.findIndex(
        (split) => split.splitId === action.payload
      );

      if (splitIndex === -1) {
        state.splits.push({
          splitId: action.payload,
          splitTitle: "",
          persons: [
            { name: "John Doe", id: personIdGenerator(), splitItems: [] },
          ],
          totalAmount: 0,
        });
      }
    },

    updateSplit: (state, action) => {
      const splitIndex = state.splits.findIndex(
        (split) => split.splitId === action.payload.splitId
      );
      if (splitIndex !== -1) {
        state.splits[splitIndex] = {
          ...state.splits[splitIndex],
          ...action.payload.updates,
        };
      }
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const splitSelector = (state: { split: RootState }) => state.split;

export const {
  setSplitId,
  updateSplit,
  setLoading,
  setError,
  setSuccess,
  clearErrors,
} = splitSlice.actions;

export default splitSlice.reducer;
