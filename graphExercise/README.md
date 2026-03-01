# Graph Exercise

This exercise focuses on building a **Graph data structure** in JavaScript and implementing core operations, as well as depth-first search (DFS) and breadth-first search (BFS) algorithms.

---

## Overview

We implemented two classes:

### `Node`

Represents a vertex in the graph.

- **Properties**:
  - `value`: The value of the node.
  - `adjacent`: A `Set` containing neighboring nodes.

### `Graph`

Represents the entire graph.

- **Properties**:
  - `nodes`: A `Set` containing all nodes in the graph.

- **Methods**:
  1. **`addVertex(vertex)`** — Adds a single `Node` to the graph.
  2. **`addVertices(vertexArray)`** — Adds an array of `Node` instances to the graph.
  3. **`addEdge(v1, v2)`** — Creates an undirected edge between `v1` and `v2`.
  4. **`removeEdge(v1, v2)`** — Removes the edge between `v1` and `v2`.
  5. **`removeVertex(vertex)`** — Removes a node from the graph and deletes it from all adjacency lists.
  6. **`depthFirstSearch(start)`** — Returns an array of node values in **DFS order** starting from the given node.
  7. **`breadthFirstSearch(start)`** — Returns an array of node values in **BFS order** starting from the given node.

---

## Example Usage

```js
const { Graph, Node } = require("./graph");

// Create nodes
const A = new Node("A");
const B = new Node("B");
const C = new Node("C");

// Create graph and add nodes
const graph = new Graph();
graph.addVertices([A, B, C]);

// Connect nodes
graph.addEdge(A, B);
graph.addEdge(B, C);

// Remove edge
graph.removeEdge(A, B);

// Remove vertex
graph.removeVertex(C);

// DFS and BFS
console.log(graph.depthFirstSearch(A)); // e.g., ["A", "B"]
console.log(graph.breadthFirstSearch(A)); // e.g., ["A", "B"]