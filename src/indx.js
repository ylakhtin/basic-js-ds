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
        while(list.next.value === k){
          if (l.next.next !== null){
            list.next = l.next.next;
          } else {
            list.next = null;
          }
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

let sp1 = new ListNode();
let sp2 = new ListNode();
let sp3 = new ListNode();
sp1.value = 1;
sp2.value = 2;
sp3.value = 2;
sp2.next = sp3;
sp1.next = sp2;
const fin = removeKFromList(sp1, 2);
console.log('------------');
console.log('final - ', fin);
console.log('fin', fin);
console.log('fin.next ', fin.next);
console.log('fin.last ', fin.next.next);
