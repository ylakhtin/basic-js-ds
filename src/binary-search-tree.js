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

  find(data) {
    return walkThrough(this.rootNode, data);

    function walkThrough(node, data){
      if (!node){
        return null;
      }
      if (node.data === data){
        return node;
      }
      if (node.data > data){
        return walkThrough(node.left, data);
      } else {
        return walkThrough(node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // let min = this.rootNode.data;
    // return walkThrough(this.rootNode, this.rootNode.data);

    // function walkThrough(node, data){
    //   if (!node){
    //     return null;
    //   }
    //   if (node.data === data){
    //     return node;
    //   }
    //   if (node.data > data){
    //     return walkThrough(node.left, data);
    //   } else {
    //     return walkThrough(node.right, data);
    //   }
    // }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};