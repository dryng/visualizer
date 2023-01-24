const NUM_ROWS = 10;
const NUM_COLS = 10;

function createGrid(rows, cols) {
    // create an empty starting grid of nodes
    const grid= [];
    let count = 0;
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c ++) {
            row.push(
                {id: count, x: r, y: c, weight: 1, visited: false, start: false, end: false}
            );
            count += 1;
        }
        grid.push(row);
    }
    return grid;
}

const initialState = {
    grid: createGrid(NUM_COLS, NUM_ROWS)
}
// createSlice uses "immer" which lets us write "immutbale" code, but its really just making a copy
const gridSlice = createSlice({
    name: 'grid',
    reducers: {
        nodeVisited: {
            // prepare sends to reducer
            // can call nodeVisited(x,y)
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].visited = true;
            },
            prepare(x, y) {
                return {
                    payload: {x, y}
                }
            }
        },
        nodeStart: {
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].start = true;
            },
            prepare(x, y) {
                return {
                    payload: {x, y}
                }
            }
        },
        nodeEnd: {
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].end = true;
            },
            prepare(x, y) {
                return {
                    payload: {x, y}
                }
            }
        },
        nodeWeight: {
            reducer(state, action) {
                const { x, y } = action.payload;
                state.grid[x][y].end = true;
            },
            prepare(x, y, weight) {
                return {
                    payload: {x, y, weight}
                }
            }
        }
    } 
})

export const { nodeVisited, nodeStart, nodeEnd, nodeWeight } = gridSlice.actions;
export default gridSlice.reducer;