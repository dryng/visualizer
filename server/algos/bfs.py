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
        
def bfs(grid):
    start_node_coords = get_start_node(grid)
    end_node_coords = get_end_node(grid)
    queue = [start_node_coords]
    visited = []
    dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    
    while len(queue):
        x, y = queue.pop(0)
        if [x,y] == end_node_coords:
            return visited
        
        visited.append([x, y])
        
        for dir in dirs:
            change_x, change_y = dir
            next_x, next_y = x + change_x, y + change_y
            if (next_x >= 0 and next_x < len(grid)
                and next_y >= 0 and next_y < len(grid[0])
                and [next_x, next_y] not in visited):
                    queue.append([next_x, next_y])