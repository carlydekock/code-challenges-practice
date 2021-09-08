//Given head, the head of a linked list, determine if the linked list has a cycle in it.
//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
//Return true if there is a cycle in the linked list. Otherwise, return false.

//Resource: Terrible Whiteboard channel on Youtube, Linked List Cycle
//Two pointers technique - one fast, and one slow, if there's a cycle - the two will meet

function ListNode(val){
  this.val = val;
  this.next = null;
}

function hasCycle(head){
  let fastPointer = head;
  let slowPointer = head;

  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if(fastPointer === slowPointer){
      return true;
    }
  }
  return false;
}

//Summary: With two pointers, we'll traverse the list at different speeds. This works because if there is a cycle in the list we'll keep going around and around, in which the two pointers will eventually meet, indicating a cycle. If they don't meet, then we've traversed the list and there is no cycle.
//Pattern: Two pointers technique, moving one at a faster pace than the other.