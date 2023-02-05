import { useState } from "react";
import { useSelector } from "react-redux";

const BOX_SIZE = 6;

export default function Node(props) {
    const [hovered, setHovered] = useState(false);
    //const bg_color = props.visited ? "bg-blue-400" : "bg-gray-200";
    const border_color = hovered ? "bg-blue-400" : "border-gray-700";
    const [x, y] = props.coords

    const nodeState = useSelector((state) => state.grid[x][y]);

    let bgColor = "bg-gray-200";
    if (nodeState.start) {
        bgColor = "bg-green-600"
    } else if (nodeState.end) {
        bgColor = "bg-red-600"
    } else if (nodeState.visited) {
        bgColor = "bg-blue-600"
    }

    function changeBackground() {
        setHovered(!hovered);
    }

    return (
        <div
            className={`h-${BOX_SIZE} w-${BOX_SIZE} ${bgColor} border-2 ${border_color} inline-block px-1.5 mx-0.5 py-1.5`}
            onClick={(e) => props.clickHandler(e, props.coords)}
        >
            <p className="text-red-500">{x}, {y}</p>
        </div>
    );
}
