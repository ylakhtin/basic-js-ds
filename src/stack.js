const { NotImplementedError } = require('../extensions/index.js');

class Stack {

  constructor(name){
    this.arr = [];
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.arr.push(element);
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    return this.arr.pop();
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
