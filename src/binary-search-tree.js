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

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data);

    function deleteNode(node, data){
      if (!node){
        return null;
      }
      if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.right){
          node = node.left;
          return node;
        }
        if (!node.left){
          node = node.right;
          return node;
        }
        let rightBranchMin = node.right;
        while (rightBranchMin.left){
          rightBranchMin = rightBranchMin.left;
        }
        node.data = rightBranchMin.data;
        node.right = deleteNode(node.right, rightBranchMin.data);
        return node;
      }
    }
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
    let node = this.rootNode;
    if (!node){
      return null;
    }
    while (node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};