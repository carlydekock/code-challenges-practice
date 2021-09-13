//876. Middle of the Linked List
//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.
//Ex- Input: head = [1,2,3,4,5], Output: [3,4,5]
//Ex- Input: head = [1,2,3,4,5,6], Output: [4,5,6]

function middleNode(head){
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

//Summary: To find the middle node of the list, we need two pointers to traverse the list at the same time but one at double the speed of the other. The fast pointer will have moved twice as far, and therefore the slow pointer will always be in the middle of the list up to that point. When the fast pointer hits the end of the list, the slow pointer will be in the middle.
//Pattern: Two pointers, at different speeds. Returning the list at the middle point to the end.
//Note: Remember to check fastPointer !== null && fastPointer.next !== null in the while loop.