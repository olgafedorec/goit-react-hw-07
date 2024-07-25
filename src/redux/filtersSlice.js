import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: "",
    reducers: {
        changeFilter: {
            reducer(state, action) {
               return action.payload
            }
        },
        prepare (value) {
            return {
                // type: "filters/changeFilter",
                payload: value,
            }
        }
    },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;