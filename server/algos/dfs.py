def get_start_node(grid):
    for row in grid:
        for node in row:
            if node.start:
                return [node.x, node.y]


def get_end_node(grid):
    for row in grid:
        for node in row:
            if node.end:
                return [node.x, node.y]


def dfs(grid):
    start_node_coords = get_start_node(grid)
    end_node_coords = get_end_node(grid)
    visited = []

    def runner(x, y):
        if [x, y] == end_node_coords:
            print(f"done")
            return True

        if (x >= 0 and x < len(grid)
            and y >= 0 and y < len(grid[0])
                and [x, y] not in visited):
            visited.append([x, y])
            return (runner(x + 1, y) or
                    runner(x - 1, y) or
                    runner(x, y + 1) or
                    runner(x, y - 1))

    runner(start_node_coords[0], start_node_coords[1])
    return visited
