const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(date) {
    this.data = date;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      addNode(this._root, newNode);
    }

    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          addNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      }
      return node;
    }
  }

  has(data) {
    return checkNode(this._root, data);
    function checkNode(node, data) {
      if (node === null) {
        return false;
      }
      if (data === node.data) {
        return true
      }
      if (data < node.data) {
        return checkNode(node.left, data)
      } else {
        return checkNode(node.right, data)
      }
    }
  }

  find(data) {
    return findNode(this._root, data);
    function findNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data < node.data) {
        return findNode(node.left, data)
      } else if (data > node.data) {
        return findNode(node.right, data)
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data)
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        
        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
        return node; 
      }
    }
  }

  min() {
    let minNode = this._root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    let maxNode = this._root;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;  
  }
}

module.exports = {
  BinarySearchTree
};