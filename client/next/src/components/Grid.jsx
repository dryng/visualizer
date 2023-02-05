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

    const grid = useSelector((state) => state.grid.grid);
    const startNode = useSelector((state) => state.grid.startNode);
    const endNode = useSelector((state) => state.grid.endNode);
    const dispatch = useDispatch();

    const nodeClickHandler = (e, coords) => {
        const [x, y] = coords;
        console.log("CLICKED COORDS", coords);

        if (!startNode && !grid[x][y].end) {
            dispatch(nodeStart(x, y, true));
        } else if (!endNode && !grid[x][y].start) {
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

        console.log("START NODE", startNode);
        console.log("END NODE", endNode);
        console.log("grid bfore", grid);
    };

    const renderedNodes = grid.map((row) => {
        let rowArr = row.map((node) => {
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
