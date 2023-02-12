import Grid from "src/components/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
    nodeVisited,
    clearAllVisited,
    clearWall,
} from "@/redux/features/grid/gridSlice";
import { useState } from "react";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function PathFindingPage() {
    const grid = useSelector((state) => state.grid.grid);
    const startNode = useSelector((state) => state.grid.startNode);
    const endNode = useSelector((state) => state.grid.endNode);
    const dispatch = useDispatch();

    const algos = [
        { id: 1, name: "BFS" },
        { id: 2, name: "DFS" },
    ];
    const [algoToRun, setAlgoToRun] = useState(algos[0]);

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
        <div>
            <Dropdown
                values={algos}
                selectedValue={algoToRun}
                setSelectedValue={setAlgoToRun}
            ></Dropdown>
            <Grid></Grid>
            <div className="flex flex-row justify-center gap-2">
                <Button
                    onClick={() => algoCaller(algoToRun.name.toLowerCase())}
                >
                    Run
                </Button>
                <Button onClick={clearGrid}>Clear</Button>
            </div>
        </div>
    );
}
