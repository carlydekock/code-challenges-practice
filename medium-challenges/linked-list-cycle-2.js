//142. Linked List Cycle II
//Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
//Do not modify the linked list.

//Ex- Input: head = [3,2,0,-4], pos = 1, Output: Output: tail connects to node index 1
//Ex- Input: head = [1,2], pos = 0, Output: tail connects to node index 0
//Ex- Input: head = [1], pos = -1, Output: no cycle

function ListNode(val, next){
  this.val = val;
  this.next = next ? next : null;
}

function LinkedList(){
  this.head = null;
}

function detectCycle(head){
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer !== null && fastPointer.next !== null){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if(slowPointer === fastPointer){
      break;
    }
  }

  if(fastPointer === null || fastPointer.next === null){
    return null;
  }

  slowPointer = head;
  while(slowPointer !== fastPointer){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}

let list = new LinkedList();
list.head = new ListNode(3);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(0);
list.head.next.next.next = new ListNode(-4, list.head.next);

console.log(detectCycle(list.head));

//Summary: First, have to detect if there is a cycle in the linked list (usual way with two pointers, one moving fast and the other slow). If they do meet, break. Need to check if fastPointer === null || fastPointer.next === null, and return null as there is no cycle. Otherwise, we reset slowPointer back to head (start at the beginning) and move each fastPointer (wherever it left off from the while loop above) and slowPointer one node at a time while they aren't equal to each other. Once they are equal to each other and we break out of the loop, return the slowPointer as the location of the start of the cycle.
//Pattern: Two pointers to tell if there is a cycle, then two pointers again to identify where the cycle starts. 
//Note: Bit tricky to think about how to identify the start of the cycle specifically. 