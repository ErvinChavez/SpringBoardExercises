class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);//adds the vertex node in the exisiting Set(), each node with a value and adjacent
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {//for each value in the vertexArray
      this.addVertex(node);//add that value to the addVertex, which makes it to a node with a value and adjacent
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);//adds the neighbors of v1 as v2
    v2.adjacent.add(v1);//adds the neigbors of v2 as v1
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);//deletes the neigbor v2 from v1
    v2.adjacent.delete(v1);//deletes the neigbor v1 from v2
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let nodes of this.nodes) {//for each node(value) of this.node
      nodes.adjacent.delete(vertex);//deletes any references to vertex(that will be deleted)
    }
    this.nodes.delete(vertex);//delete the vertex
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];//makes a stack(array) of the nodes for start
    let seen = new Set();//empty set for the seen nodes(ensures each node is visited only once)
    let result = [];//the result of each node val

    while (stack.length > 0) {//while the stack is not empty
      let currentVisit = stack.pop();//look at the node in the stack that was pop()

      if (!seen.has(currentVisit)) {//if that node was not in seen set yet
          seen.add(currentVisit);//add that node to seen set(ensures each node is visited only once)
          result.push(currentVisit.value);//push the value of the node to the result
          for (let neighbor of currentVisit.adjacent) {//for each neighbor of that node
          stack.push(neighbor);//push to the stack
        } 
      }
    }
    return result;//return the values 
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];//makes a queue(array) of nodes for start
    let seen = new Set();//empty set for the seen nodes(ensures each node is visited only once)
    let result = [];//the result of each node val

    while (queue.length > 0) {//while the queue is not empty
      let currentVisit = queue.shift();//look at the node in the queue tha was shift()

      if (!seen.has(currentVisit)) {//if that node was not in seen set yet
          seen.add(currentVisit);//add the node to the seen set(ensures each node is visited only once)
          result.push(currentVisit.value);//push the node value to the result array
          for (let neighbor of currentVisit.adjacent) {//for each neighbor of the currentVisit
          queue.push(neighbor);//add that node to the queue
        } 
      }
    }
    return result;//return that values of the nodes
  }
}

module.exports = {Graph, Node}