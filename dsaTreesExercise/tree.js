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
    const values = [this.root];//this are the values of the tree starting at the root

    if (this.root === null) return 0; //if root is null then just return 0

    while (values.length) {//while there is still values remaining in the array
      const current = values.shift();//looking at the current val
      sumOfValues += current.val;//adding that val to the sumOfValues
      for (let child of current.children) {//going down the tree to the children
        values.push(child)//pushing the next children to the array of values
      }
    } 
    return sumOfValues; //return the sumOfValues (total)
  }



  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evenVals = []; //array of even values being pushed to
    const values = [this.root]//Starting at the root of tree

    if (this.root === null) return 0;//return 0 is nothing in root 

    while (values.length) { //the vals in the queue
      const currentVal = values.shift();//checking the current val

      if (currentVal.val % 2 === 0) { //checking if value is even
        evenVals.push(currentVal.val);}
      
      for (let child of currentVal.children) {//adding the children to the queue to process it next
        values.push(child);
      }
    }
    return evenVals.length;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}
// module.exports = {Tree, TreeNode};