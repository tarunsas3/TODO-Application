import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //CREATE

    itemStart: (state) => {
      state.isFetching = true;
    },
    itemSuccess: (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
    },
    itemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //DELETE

    deleteItemStart: (state) => {
      state.isFetching = true;
    },
    deleteItemSuccess: (state, action) => {
      state.isFetching = false;
      state.items.splice(
        state.items.indexOf((list) => list.id === action.payload),
        1
      );
    },
    deleteItemFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  itemStart,
  itemSuccess,
  itemFailure,
  deleteItemStart,
  deleteItemSuccess,
  deleteItemFailure,
} = itemSlice.actions;
export default itemSlice.reducer;
