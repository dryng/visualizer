import { createSlice } from "@reduxjs/toolkit";

const NUM_ROWS = 20;
const NUM_COLS = 10;

function createGrid(rows, cols) {
    // create an empty starting grid of nodes
    const grid = [];
    let count = 0;
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            row.push({
                id: count,
                x: r,
                y: c,
                start: false,
                end: false,
                wall: false,
                weight: 1,
                visited: false,
            });
            count += 1;
        }
        grid.push(row);
    }
    return grid;
}

const initialState = {
    grid: createGrid(NUM_COLS, NUM_ROWS),
    startNode: null,
    endNode: null,
};

// this is broken. can't index x y into grid because the elements
// at x, y are different than then index

// createSlice uses "immer" which lets us write "immutbale" code, but its really just making a copy
const gridSlice = createSlice({
    name: "grid",
    initialState,
    reducers: {
        nodeVisited: {
            // prepare sends to reducer
            // can call nodeVisited(x,y)
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].visited = true;
            },
            prepare(x, y) {
                // x = NUM_ROWS - x - 1; // need to remap because passing index of arrays. nodeStart and end get the right ones from node comp
                // not good lol
                return {
                    payload: { x, y },
                };
            },
        },
        nodeStart: {
            reducer(state, action) {
                // set => True or False.
                // whether setting or unsetting
                const { x, y, set } = action.payload;
                state.grid[x][y].start = set;
                if (set) {
                    state.startNode = state.grid[x][y];
                } else {
                    state.startNode = null;
                }
            },
            prepare(x, y, set) {
                return {
                    payload: { x, y, set },
                };
            },
        },
        nodeEnd: {
            reducer(state, action) {
                const { x, y, set } = action.payload;
                state.grid[x][y].end = set;
                if (set) {
                    state.endNode = state.grid[x][y];
                } else {
                    state.endNode = null;
                }
            },
            prepare(x, y, set) {
                return {
                    payload: { x, y, set },
                };
            },
        },
        nodeWeight: {
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].end = true;
            },
            prepare(x, y, weight) {
                return {
                    payload: { x, y, weight },
                };
            },
        },
        nodeWall: {
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].wall = true;
            },
            prepare(x, y) {
                return {
                    payload: { x, y },
                };
            },
        },
        clearAllVisited: {
            reducer(state, action) {
                state.grid.map((row) =>
                    row.map((node) => (node.visited = false))
                );
            },
        },
        clearWall: {
            reducer(state, action) {
                state.grid.map((row) =>
                    row.map((node) => (node.wall = false))
                );
            },
        },
    },
});

export const { nodeVisited, nodeStart, nodeEnd, nodeWeight, nodeWall, clearAllVisited, clearWall } =
    gridSlice.actions;
export default gridSlice.reducer;
