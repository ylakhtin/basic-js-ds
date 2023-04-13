const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    let node = new Node();
    this.rootNode = node;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    console.log(this.rootNode);
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootNode === null){
      this.rootNode = node;
    } else {
      this.insertNewNode(this.rootNode, node);
    }
  }

  insertNewNode(initNode, newNode){
    if (newNode.data > initNode.data){
      if (initNode.right === null) {
        initNode.right = newNode;
      } else {
        insertNewNode(initNode.right, newNode);
      }
    }
    if (newNode.data < initNode.data){
      if (initNode.left === null) {
        initNode.left = newNode;
      } else {
        insertNewNode(initNode.left, newNode);
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};