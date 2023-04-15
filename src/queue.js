const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor(){
    let rootElement = new ListNode();
    this.rootElement = rootElement;
  }

  getUnderlyingList() {
    return this.rootElement;
  }

  enqueue(value) {
    if (this.rootElement.value === null){
      this.rootElement.value = value;
    } else {
      addElement(this.rootElement, value);
    }
    function addElement(element, value){
      if (element.next === null){
        let newEl = new ListNode();
        newEl.value = value;
        element.next = newEl;
      } else {
        addElement(element.next, value);
      }
    }
  }

  dequeue() {
    let head = this.rootElement.value;
    this.rootElement = this.rootElement.next;
    return head;
  }
}

module.exports = {
  Queue
};
