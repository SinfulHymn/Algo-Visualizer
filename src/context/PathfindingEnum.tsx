export enum PathfindingAlgorithms {
    BFS = "BFS",
    DFS = "DFS",
    Dijkstra = "Dijkstra",
    AStar = "AStar",
    GreedyBestFirst = "GreedyBestFirst",
}

export const PathfindingAlgorithmsSet = {
    [PathfindingAlgorithms.BFS]: {
        name: "PathfindingAlgorithms",
        description: "BFS is a simple pathfinding algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n)",
    },
    [PathfindingAlgorithms.DFS]: {
        name: "DFS",
        description: "DFS is a simple pathfinding algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n)",
    },
    [PathfindingAlgorithms.Dijkstra]: {
        name: "Dijkstra",
        description: "Dijkstra is a simple pathfinding algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n)",  
    },
    [PathfindingAlgorithms.AStar]: {
        name: "AStar",
        description: "AStar is a simple pathfinding algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n)",
    },
    [PathfindingAlgorithms.GreedyBestFirst]: {
        name: "GreedyBestFirst",
        description: "GreedyBestFirst is a simple pathfinding algorithm that works by iterating over the list and inserting each element into the correct position.",
        complexity: "O(n)",
    }
}