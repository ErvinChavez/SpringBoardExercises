/** TreeNode: node for general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;//The current val looking at
    this.children = children;//the childeren of current val looking at
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;//the start or root of the tree
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    let sumOfValues = 0;
    const values = [this];//this should be the the val of the root
    while (values.length) {
      const current = values.shift();
      sumOfValues += current;
      for (let child of current.children) {
        values.push(child)
      }
    }
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //now loop through the node
    //add to counter for every node
    //return the counter at end now for total
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
