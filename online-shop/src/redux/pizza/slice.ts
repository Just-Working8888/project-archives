import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, PizzaSliceState, SerchPizzaParams, Status } from "./types";


export const fetchPizzas = createAsyncThunk<Pizza[],SerchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sortBy, order, searh } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://63d304794abff88834170d21.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searh}`
    );
    return data;
  }
);


const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});



export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
