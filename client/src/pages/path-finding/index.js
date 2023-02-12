import Grid from "src/components/Grid";
import Node from "src/components/Node";
import logger from "@/app/algos/logger";
import { useDispatch, useSelector } from "react-redux";
import {
    nodeVisited,
    clearAllVisited,
    clearWall,
} from "@/redux/features/grid/gridSlice";
import { useState } from "react";
import Button from "@mui/material/Button";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function PathFindingPage() {
    const grid = useSelector((state) => state.grid.grid);
    const startNode = useSelector((state) => state.grid.startNode);
    const endNode = useSelector((state) => state.grid.endNode);

    const dispatch = useDispatch();
    const [algoToRun, setAlgoToRun] = useState("bfs");

    async function algoCaller(algo) {
        const response = await fetch(`http://127.0.0.1:8000/${algo}/`, {
            method: "POST", // should be get but can send parameters
            body: JSON.stringify({
                grid: grid,
                start_node: startNode,
                end_node: endNode,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        // mark nodes visited in redux so nodes can change color
        for (let node of data.nodesVisited) {
            dispatch(nodeVisited(node[0], node[1]));
            await sleep(15);
        }
    }

    function clearGrid() {
        dispatch(clearAllVisited());
        dispatch(clearWall());
    }

    function algoChange(event) {
        setAlgoToRun(event.target.value);
    }

    return (
        <div className="flex">
            <div className="flex-1">
                <Grid algo={logger} algoName={"BFS"}></Grid>
                
                <label htmlFor="algos">Algo:</label>
                <select name="algos" id="algos" value={algoToRun} onChange={algoChange}>
                    <option value="bfs">BFS</option>
                    <option value="dfs">DFS</option>
                </select>

                <Button onClick={() => algoCaller(algoToRun)} variant="contained">
                    Run
                </Button>
                <Button onClick={clearGrid} variant="contained">Clear</Button>
            </div>
            <div className="flex-1">
                <form onSubmit={algoCaller}>
                    <label htmlFor="algo">Algo:</label>
                    <br />
                    <input type="text" id="algo" name="algo" />
                    <br />
                    <label htmlFor="numRows">Rows:</label>
                    <br />
                    <input type="text" id="numRows" name="numRows" />
                    <br />
                    <label htmlFor="numCols">Cols:</label>
                    <br />
                    <input type="text" id="numCols" name="numCols" />
                    <br />
                    <input type="submit" value="Run"></input>
                </form>
            </div>
        </div>
    );
}
