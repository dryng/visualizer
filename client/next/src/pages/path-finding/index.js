import Grid from "src/components/Grid";
import Node from "src/components/Node";
import logger from "@/app/algos/logger";
import { useDispatch, useSelector } from "react-redux";
import { nodeVisited, clearAllVisited } from "@/redux/features/grid/gridSlice";
import { use } from "react";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PathFindingPage() {
    
    const grid = useSelector((state) => state.grid.grid);
    const startNode = useSelector((state) => state.grid.startNode);
    const endNode = useSelector((state) => state.grid.endNode);

    const dispatch = useDispatch();

    async function algoCaller(algo) {
        const response = await fetch(`http://127.0.0.1:8000/${algo}/`, {
            method: "POST", // should be get but can send parameters
            body: JSON.stringify({ grid: grid,  start_node: startNode, end_node: endNode}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
    
        // mark nodes visited in redux so nodes can change color
        for (let node of data.nodesVisited) {
            console.log("node visited", node);
            dispatch(nodeVisited(node[0], node[1]));
            await sleep(15);
        }
    }

    return (
        <div>
            <Grid algo={logger} algoName={"BFS"}></Grid>
            <button onClick={() => algoCaller("bfs")}>Run: {"ALGO NAME"}</button>
            <br></br>
            <button onClick={() => dispatch(clearAllVisited())}>Clear</button>
        </div>
    );
}
