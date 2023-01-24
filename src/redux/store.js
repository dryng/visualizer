import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./features/grid/gridSlice";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
    // does all the other steps in one
    reducer : {
        grid: gridReducer
    }
});

export const wrapper = createWrapper<AppStore>(store);