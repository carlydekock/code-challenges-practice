//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
//List is sorted in ascending order, values -100 <= Node.val <= 100
//Input: head = [1,1,2]
//Output: [1,2]

function listNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function deleteDuplicates(head){
  let current = head;
  while(current){
    if(current.next !== null && current.val === current.next.val){
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}