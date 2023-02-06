def dfs(grid, start_node, end_node):
    start_node_coords = [start_node.x, start_node.y]
    end_node_coords = [end_node.x, end_node.y]
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
