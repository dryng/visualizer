def bfs(grid, start_node, end_node):
    start_node_coords = [start_node.x, start_node.y]
    end_node_coords = [end_node.x, end_node.y]
    queue = [start_node_coords]
    visited = []
    dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while len(queue):
        x, y = queue.pop(0)
        if [x, y] == end_node_coords:
            return visited

        if [x, y] not in visited:
            visited.append([x, y])
            for dir in dirs:
                change_x, change_y = dir
                next_x, next_y = x + change_x, y + change_y
                if (next_x >= 0 and next_x < len(grid)
                        and next_y >= 0 and next_y < len(grid[0])):
                    queue.append([next_x, next_y])