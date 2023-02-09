import {
    nodeEnd,
    nodeStart,
    nodeWall,
} from "src/redux/features/grid/gridSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Node from "./Node";

export default function Grid(props) {
    const grid = useSelector((state) => state.grid.grid);
    const startNode = useSelector((state) => state.grid.startNode);
    const endNode = useSelector((state) => state.grid.endNode);
    const dispatch = useDispatch();

    const [isMouseClickHeld, setIsMouseClickHeld] = useState(false);

    /*
        Set the start and end node. The end node is only set once the start node
        has been set. Both can be changed by clicked on the set node to unset it.
    */
    const nodeClickHandler = (e, coords) => {
        const [x, y] = coords;
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
    };

    /*
        Ability to click and hover over nodes in order to create a wall.
        Once the mouse is clicked and held down, the nodes hovered over 
        become part of the wall. 
    */
    const onMouseDown = (e) => {
        setIsMouseClickHeld(true);
    };
    const onMouseUp = (e) => {
        setIsMouseClickHeld(false);
    };
    const onMouseEnter = (e, coords) => {
        const [x, y] = coords;
        // can't be set to a wall if its the start or end node
        if (
            isMouseClickHeld &&
            startNode &&
            (startNode.x !== x ||
            startNode.y != y) &&
            (endNode.x !== x ||
            endNode.y !== y)
        ) {
            const [x, y] = coords;
            dispatch(nodeWall(x, y));
        }
    };

    const renderedNodes = grid.map((row) => {
        let rowArr = row.map((node) => {
            return (
                <Node
                    key={node.id}
                    coords={[node.x, node.y]}
                    visited={node.visited}
                    clickHandler={nodeClickHandler}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseEnter={onMouseEnter}
                ></Node>
            );
        });
        rowArr.push(<br key={row} />);
        return rowArr;
    });

    return <ul>{renderedNodes}</ul>;
}
