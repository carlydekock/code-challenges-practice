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

//Summary: With three pointers, previous, current, and following we will traverse the list. At first, previous will be sent to null, current and following set to head. While current !== null (while there are still nodes in the list), we'll go through the four necessary steps to swap. Following will become following.next, so we don't lose track of that next node, current.next will be set to previous (to swap direction), previous will be moved up to current, and current moved up to following and we'll repeat from there.
//Pattern: Three pointers, need to be careful what we assign each to, and the order in which we do the swap. Following needs to move forward so we have record of the "next" node, while current.next (was following) needs to be set to the previous node. This is what changes the direction. Then, we need to move everything up to continue on.

