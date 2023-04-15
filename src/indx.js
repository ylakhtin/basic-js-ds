const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data){
      if (!node){
        return new Node(data);
      }
      if (node.data === data){
        return node;
      }
      if (node.data > data){
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return walkThrough(this.rootNode, data);
    
    function walkThrough(node, data){
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      if (node.data > data){
        return walkThrough(node.left, data);
      } else {
        return walkThrough(node.right, data);
      }
    }
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
    let node = this.rootNode;
    if (!node){
      return null;
    }
    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

let tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);

console.log(tree.min());