const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  //throw new NotImplementedError('Not implemented');
  console.log(l);
  console.log(l.next);
  console.log(l.next.value);
  console.log(l.next.next);
  l = checkList(l,k);
  function checkList(list){
    if (list.next !== null){
        console.log('not null');
        console.log(list.next.value === k);
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

let sp1 = new ListNode();
let sp2 = new ListNode();
let sp3 = new ListNode();
sp1.value = 1;
sp2.value = 2;
sp3.value = 3;
sp2.next = sp3;
sp1.next = sp2;
console.log('final - ',removeKFromList(sp1, 3));
