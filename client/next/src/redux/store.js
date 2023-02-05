import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./features/grid/gridSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
    // does all the other steps in one
    reducer : {
        grid: gridReducer,
        devTools: true
    }
});

export const wrapper = createWrapper(makeStore);