//203. Remove Linked List Elements
//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
//Ex- Input: head = [1,2,6,3,4,5,6], val = 6, Output: [1,2,3,4,5]
//Ex- Input: head = [], val = 1, Output: []
//Ex- Input: head = [7,7,7,7], val = 7, Output: []

function ListNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function removeElements(head, val){
  const dummy = new ListNode(null);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while(current !== null){
    if(current.val === val){
      let temp = current.next;
      prev.next = temp;
      current = temp;
    } else {
      current = current.next;
      prev = prev.next;
    }
  }
  return dummy.next;
}

