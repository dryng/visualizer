import {
    nodeEnd,
    nodeStart,
    nodeVisited,
} from "src/redux/features/grid/gridSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Node from "./Node";

export default function Grid(props) {
    // useState to let user click on node to be start and end. Only stores in redux when the
    // user clicks "run". This way can change start and end. End can only be set once start has been.
    // jk do it in redux so the node knows what color to be

    const grid = useSelector((state) => state.grid);
    const dispatch = useDispatch();

    const getStartNode = (grid) => {
        for (let row of grid) {
            for (let node of row) {
                if (node.start) return node;
            }
        }
    };

    const getEndNode = (grid) => {
        // get the end node
        for (let row of grid) {
            for (let node of row) {
                if (node.end) return node;
            }
        }
    };

    // check if a start node has been set yet
    const startNodeSet = () => {
        for (let row of grid) {
            for (let node of row) {
                if (node.start) {
                    return true;
                }
            }
        }
        return false;
    };

    // check if an end node has been set yet
    const endNodeSet = () => {
        for (let row of grid) {
            for (let node of row) {
                if (node.end) {
                    return true;
                }
            }
        }
        return false;
    };

    const nodeClickHandler = (e, coords) => {
        const [x, y] = coords;
        console.log("CLICKED COORDS", coords);
        // click
        if (!startNodeSet() && !grid[x][y].end) {
            dispatch(nodeStart(x, y, true));
        } else if (!endNodeSet() && !grid[x][y].start) {
            if (grid[x][y].start) {
                dispatch(nodeStart(x, y, false));
            } else {
                dispatch(nodeEnd(x, y, true));
            }
        } else {
            // both are set -> unclick
            if (grid[x][y].start) {
                dispatch(nodeStart(x, y, false));
            } else if (grid[x][y].end) {
                dispatch(nodeEnd(x, y, false));
            }
        }
        let startNode = getStartNode(grid);
        let endNode = getEndNode(grid);
        console.log("START NODE", startNode);
        console.log("END NODE", endNode);
        console.log("grid bfore", grid);

        if (startNode !== null && endNode != null) {
            //bfs(grid, dispatch);
        }
    };

    const renderedNodes = grid.map((row, x) => {
        let rowArr = row.map((node, y) => {
            return (
                <Node
                    key={node.id}
                    coords={[node.x, node.y]}
                    visited={node.visited}
                    clickHandler={nodeClickHandler}
                ></Node>
            );
        });
        rowArr.push(<br key={row}/>);
        return rowArr;
    });

    return <ul>{renderedNodes}</ul>;
}
