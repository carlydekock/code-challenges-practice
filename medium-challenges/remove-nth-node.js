//19. Remove nth node from end of list
//Given the head of a linked list, remove the nth node from the end of the list and return its head.
//Ex- Input: head = [1,2,3,4,5], n=2, Output: [1,2,3,5]

function ListNode(val, next){
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : val);
}

function removeNthFromEnd(head, n){

  let dummy = new ListNode(null);
  dummy.next = head;
  let slowPointer = dummy;
  let fastPointer = dummy;
  
  for(let i = 0; i <= n; i++){
    fastPointer = fastPointer.next;
  }

  while(fastPointer !== null){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  slowPointer.next = slowPointer.next.next;
   
  return dummy.next;
}

console.log(removeNthFromEnd([1,2,3,4,5]));
