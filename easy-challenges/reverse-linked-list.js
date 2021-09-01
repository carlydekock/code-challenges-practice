//206. Reverse Linked List
//Given the head of a singly linked list, reverse the list, and return the reversed list.
//Ex- Input: head=[1,2,3,4,5], output: [5,4,3,2,1]

function reverseList(head){
  let previous = null;
  let current = head;
  let following = head;

  while(current !== null){
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }
  return previous;
}