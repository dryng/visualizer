// BFS
function getStartNode(grid) {
    for (let row of grid) {
        for (let node of row) {
            if (node.start) return node;
        }
    }
}

function getEndNode(grid) {
    for (let row of grid) {
        for (let node of row) {
            if (node.end) return node;
        }
    }
}

function bfs(grid) {
    const startNode = getStartNode(grid);
    const startCoords = [startNode.x, startNode.y];
    const endNode = getEndNode(grid);
    const endCoords = [endNode.x, endNode.y];
    const queue = [startCoords];
    const visited = new Set();

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];

    while (queue.length > 0) {
        let currNode = queue.shift();
        let [x, y] = currNode;
        console.log("curr", grid[x][y]);

        if (currNode.toString() === endCoords.toString()) {
            console.log("DONE");
            return;
        }

        for (let ndir of dirs) {
            let [xChange, yChange] = ndir;
            x += xChange;
            y += yChange;
            if (
                x >= 0 &&
                x < grid[0].length &&
                y >= 0 &&
                y < grid.length &&
                !visited.has(currNode)
            ) {
                queue.push([x, y]);
                visited.add(currNode);
            }
        }
    }
    return Array.from(visited);
}

export default bfs;