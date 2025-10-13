/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    //Start at the root 
    const values = [{node: this.root, depth: 1}]; //starts at the root and gives the root a depth of 1

    if (this.root === null) return 0; //if no root then just return 0

    while (values.length) { //while there is still values in the queue
      let current = values.shift(); //the current value looking at
      if (current.node.left === null && current.node.right === null) { //if the current value we're looking at has no left or right values
        return current.depth; //return the depth of the current value/node
      } else {
        if (current.node.left) {
          values.push({node: current.node.left, depth: current.depth + 1});//if there is values/nodes in the left, push them to queue, add 1 to depth
        } 
        if (current.node.right) {
          values.push({node: current.node.right, depth: current.depth + 1});//if there is value/node in the right, push it to the queue, add 1 to depth
        }
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const values = [{node: this.root, depth: 1}]; //starts at the root and gives the root a depth of 1
    let maxDepth = 0;//the value of the max depth

    if (this.root === null) return 0; //if no root then just return 0

    while (values.length) { //while there is still values in the queue
      let current = values.shift(); //the current value looking at
      if (current.node.left === null && current.node.right === null) { //if the current value we're looking at has no left or right values
       //return current.depth; //return the depth of the current value/node
        if (maxDepth < current.depth) {//if the current depth is higher than maxDepth
          maxDepth = current.depth//set the max depth to current depth
        }
        } else {
        if (current.node.left) {
          values.push({node: current.node.left, depth: current.depth + 1});//if there is values/nodes in the left, push them to queue, add 1 to depth
        } 
        if (current.node.right) {
          values.push({node: current.node.right, depth: current.depth + 1});//if there is value/node in the right, push it to the queue, add 1 to depth
        }
      }
  } return maxDepth;
}

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) return 0;//if no root, return 0;

    let maxSum = 0;//the current max sum;

    function helper(node) {//function for each node;
      if (node === null) return 0;//if no node, return 0;

      let leftSum = helper(node.left);//the left node
      let rightSum = helper(node.right);//the right node

      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);//this is the maximum path of the node val, and it's left and right val
      return node.val + Math.max(leftSum, rightSum);//returns the maximum path going from current node to only ONE single branch(highest value branch)
  }
    helper(this.root);//runs the helper function with the this.root
    return maxSum;//returns the maxSum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const values = [this.root]//the start values, going through each node
    const potentialBest = [];//list of all the values larger then lowerBound
    
    if (this.root === null) return null;//if no node return 0
    
    while (values.length) {//while there are still values in queue
      const current = values.shift()//sets the first values to be checked

      if (current.val > lowerBound) {//compares that value to lowerbond
        potentialBest.push(current.val);//pushing higher values to potentialBest array
      }
      //Could replace the comparing with:
      // if (current.val > lowerBound) {
      // if (bestValue === null || current.val < bestValue) {
      // bestValue = current.val;
        //}
      //}
      if (current.left) {values.push(current.left)};//push left children to values queue
      if (current.right) {values.push(current.right)};//push right children to values queue
      
    }
    
    if (potentialBest.length) {//if there are values in the potential best list
      const bestValue = Math.min(...potentialBest);//creates a single value for the smallest best node
      return bestValue;//returns the smallest value of the best value
    } else {return null;}//return null if there was no best values in list
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {//the nodes you want to check if cousins
  if (this.root === null) return false; // if no root return false

  const values = [this.root]; //the start values, starting with root
  const parents = new Map(); // makes a map of parents for each node
  const depths = new Map();  // makes a map for the depth of each node

  parents.set(this.root, null);//the map of parents will have values like {current value , null}
  depths.set(this.root, 0);//the map of depth will have values like , current value, it's depth)


  while (values.length) { // while there are still nodes in queue
    const current = values.shift(); // get next node from queue

    if (current.left) { //if children on left
      values.push(current.left);//push to queue values
      parents.set(current.left, current);//set the parents map value for that {current.left (the left node value), current(the left's parent)}
      depths.set(current.left, depths.get(current) + 1);//set the child’s depth to parent’s depth + 1}
    }

    if (current.right) {//if children on right
      values.push(current.right);//push to queue values
      parents.set(current.right, current);//set the parents map value for that {current.right (the right node value), current(the right's parent)}
      depths.set(current.right, depths.get(current) + 1);//set the child’s depth to parent’s depth + 1}
    }
  }

  // after traversal, check:
  return (depths.get(node1) === depths.get(node2))//sees if the two nodes are in the same depth
  && 
  (parents.get(node1) !== parents.get(node2));//but also sees if they don't have the same parents
}


  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


// module.exports = { BinaryTree, BinaryTreeNode };
