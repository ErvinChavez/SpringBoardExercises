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
      return valuesOfNode(this.root);
    }
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
