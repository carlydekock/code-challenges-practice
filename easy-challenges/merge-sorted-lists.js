//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
function ListNode(val){
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2){
  let newList = new ListNode();
  let head = newList;

  while(l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      newList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      newList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    newList = newList.next;
  }

  if(l1 !== null){
    newList.next = l1;
  }
  if(l2 !== null){
    newList.next = l2;
  }
  // console.log(head);
  // console.log(head.next);
  return head.next;
}

console.log(mergeTwoLists([1,2,4], [1,3,4]));