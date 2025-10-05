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
    const values = [this.root];//Starting at the root of tree

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
    let count = 0;//the number of values greater then lowerBound
    const values = [this.root]; //starting the checking against the root first

    if(this.root === null) return 0;//if nothing in root, return 0

    while (values.length) {
      const currentVal = values.shift();//comparing the first current val

      if (currentVal.val > lowerBound) {//if the current val is greater then lowerbound
        count += 1}//add a count to the number of count
      for (let child of currentVal.children) {//for the children of the val
        values.push(child);//add them to the queue to compare
      }
    }
    return count; //return the number of nodes higher then the lowerBound val
  }
}
// module.exports = {Tree, TreeNode};