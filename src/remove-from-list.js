const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  l = checkList(l,k);
  function checkList(list){
    if (list.next !== null){
        if (list.next.value === k){
            list.next = l.next.next;
            console.log(list);
            console.log(list.next);
        }
        checkList(list.next);
    }
    return list;
  }
  return l;
}

module.exports = {
  removeKFromList
};
