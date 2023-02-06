from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from algos.bfs import bfs
from algos.dfs import dfs

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: int
    x: int
    y: int
    start: bool
    end: bool
    wall: bool
    weight: int
    visited: bool


class Grid(BaseModel):
    grid: List[List[Node]]
    start_node: Node
    end_node: Node


@app.get("/")
def root():
    return {"message": "hello world"}


@app.post("/bfs")
def bfs_handler(grid: Grid):
    print("hitting bfs") 
    nodesVisited = bfs(grid.grid, grid.start_node, grid.end_node)
    return {"nodesVisited": nodesVisited}


@app.post("/dfs")
def bfs_handler(grid: Grid):
    nodesVisited = dfs(grid.grid, grid.start_node, grid.end_node)
    return {"nodesVisited": nodesVisited}
