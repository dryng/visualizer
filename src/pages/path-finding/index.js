import Grid from "src/components/Grid";
import Node from "src/components/Node";
import logger from "@/app/algos/logger";
import { useSelector } from "react-redux";

export default function PathFindingPage() {

    const grid = useSelector((state) => state.grid);

    async function algoCaller() {
        const response = await fetch('/api/algos/path-finding/bfs', {
            method: "POST", // should be get but can send parameters
            body: JSON.stringify({grid: grid}),
            headers: {
                'Content-Type' : "application/json"
            }
        });
        const data = await response.json();
        console.log("data response", data);
    }

    return (
        <div>
            <h1>hey</h1>
            <Grid algo={logger} algoName={"BFS"}></Grid>
            <button onClick={algoCaller}>Run: {"ALGO NAME"}</button>
        </div>
    );
}
