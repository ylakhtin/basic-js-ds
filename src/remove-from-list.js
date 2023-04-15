const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  console.log('initial list - ', l);
  console.log('next from root - ', l.next);
  console.log('next from next from root - ', l.next.next);
  console.log('value to remove - ', k);
  l = checkList(l,k);
  function checkList(list){
    if (list.value === k){
      list = list.next;
    }
    if (list.next !== null){
        if (list.next.value === k){
          list.next = list.next.next;
          checkList(list);
        } else {
          checkList(list.next);
        }
    }
    return list;
  }
  return l;
}

module.exports = {
  removeKFromList
};
