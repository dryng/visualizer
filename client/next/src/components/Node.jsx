import { useState } from "react";
import { useSelector } from "react-redux";

const BOX_SIZE = 6;

export default function Node(props) {       
    const [x, y] = props.coords;
    const nodeState = useSelector((state) => state.grid.grid[x][y]);

    let bgColor = "bg-gray-200";
    if (nodeState.start) {
        bgColor = "bg-green-600"
    } else if (nodeState.end) {
        bgColor = "bg-red-600"
    } else if (nodeState.visited) {
        bgColor = "bg-blue-600"
    } else if (nodeState.wall) {
        bgColor = "bg-gray-600" 
    }

    const border_color = nodeState.visited ? "border-blue-600" : "border-gray-600";

    return (
        <div
            className={`h-${BOX_SIZE} w-${BOX_SIZE} ${bgColor} border-2 ${border_color} rounded-xl inline-block px-1.5 mx-0.5 py-1.5`}
            onClick={(e) => props.clickHandler(e, props.coords)}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onMouseEnter={(e) => props.onMouseEnter(e, props.coords)}
        >
            <p className="text-red-500">{x}, {y}</p>
        </div>
    );
}
