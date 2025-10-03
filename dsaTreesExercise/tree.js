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
 
    sumValues(TreeNode) {
    let sumOfValues = 0;
    const values = [this.root];//this should be the the val of the root

    if (values === null) {
      return 0;
    }

    while (values.length) {
      const current = values.shift();
      sumOfValues += current.val;
      for (let child of current.children) {
        values.push(child)
      }
      return sumOfValues;
    }
  }
}

  /** sumValues(): add up all of the values in the tree. */
  


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

//module.exports = { Tree, TreeNode };
