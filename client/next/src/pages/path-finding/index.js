import Grid from "src/components/Grid";
import Node from "src/components/Node";
import logger from "@/app/algos/logger";
import { useDispatch, useSelector } from "react-redux";
import { nodeVisited } from "@/redux/features/grid/gridSlice";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function PathFindingPage() {
    
    const grid = useSelector((state) => state.grid.grid);

    const dispatch = useDispatch();

    async function algoCaller(algo) {
        const response = await fetch(`http://127.0.0.1:8000/${algo}/`, {
            method: "POST", // should be get but can send parameters
            body: JSON.stringify({ data: grid }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
    
        // mark nodes visited in redux so nodes can change color
        for (let node of data.nodesVisited) {
            dispatch(nodeVisited(node[0], node[1]));
            await sleep(50);
        }
    }

    return (
        <div>
            <h1>hey</h1>
            <Grid algo={logger} algoName={"BFS"}></Grid>
            <button onClick={() => algoCaller("dfs")}>Run: {"ALGO NAME"}</button>
        </div>
    );
}
