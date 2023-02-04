// BFS algo
import { nodeVisited } from "@/redux/features/grid/gridSlice";
import { useSelector, useDispatch } from "react-redux";

/* if I uncomment this (NOT EVEN CALLING), bfs never finishes?? js is broken
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
*/

/*
function sleepy(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}*/

// eventually move to redux store
const getStartNode = (grid) => {
    for (let row of grid) {
        for (let node of row) {
            if (node.start) return node;
        }
    }
    // get the start node
    /*
    return grid.reduce((accumulator, cv) => {
        let filtered = cv.filter((node) => node.start);
        if (filtered.length) {
            accumulator.push(filtered);
        }
        return accumulator;
    }, []);*/
};

const getEndNode = (grid) => {
    // get the end node
    for (let row of grid) {
        for (let node of row) {
            if (node.end) return node;
        }
    }
    /*
    return grid.reduce((accumulator, cv) => {
        let filtered = cv.filter((node) => node.end);
        if (filtered.length) {
            accumulator.push(filtered);
        }
        return accumulator;
    }, []);
    */
};

const bfs = (grid, dispatch) => {
    //const grid = useSelector((state) => state.grid);
    //const dispatch = useDispatch();

    console.log("GRID", grid);
    dispatch(nodeVisited(5,5));
    console.log("dispatched")

    const startNode = getStartNode(grid);
    const startCoords = [startNode.x, startNode.y];
    const endNode = getEndNode(grid);
    const endCoords = [endNode.x, endNode.y];
    const queue = [startCoords];

    const dirs = [[-1,0],[1,0],[0,1],[0,-1]];

    while (queue.length > 0) {
        console.log("running bfssss");
        let currNode = queue.shift();
        let [x,y] = currNode;
        console.log("curr", grid[x][y]);

        if (currNode.toString() === endCoords.toString()) {
            console.log("DONE");
            return;
        }

        for (let ndir of dirs) {
            let [xChange, yChange] = ndir;
            x += xChange;
            y += yChange;
            if (x >= 0 && x < grid[0].length
                && y >= 0 && y < grid.length &&
                !grid[x][y].visited) {
                    queue.push([x,y]);
                    dispatch(nodeVisited(x,y));
                    //sleep(100);
                }
        }
    }
};

export { getStartNode, getEndNode, bfs };