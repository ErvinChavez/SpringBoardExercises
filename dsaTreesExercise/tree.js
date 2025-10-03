class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (this.root === null) return 0;
    
    function valuesOfNode(node) {
      let total = node.val;

      for (let child of node.children) {
        total += valuesOfNode(child);
      }
      return total;
    }
    return valuesOfNode(this.root);
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let counter = 0;
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
