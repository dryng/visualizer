import bfs from "@/app/algos/bfs";

// BFS Endpoint Handler
function bfsHandler(req, res) {
   if (req.method == "POST") {
        const data = req.body;
        const grid = data.grid;
        const visitedNodes = bfs(grid);
        res.status(201).json({visitedNodes: visitedNodes});
   }
}

export default bfsHandler;