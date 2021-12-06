//234. Palindrome Linked List
//Given the head of a singly linked list, return true if it is a palindrome.

function isPalindrome(head){
  const nodes = [];
  let current = head;
  while(current !== null){
    nodes.push(current.val);
    current = current.next;
  }

  let left = 0;
  let right = nodes.length -1;

  while(left <= right){
    if(nodes[left] === nodes[right]){
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

function ListNode(val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function LinkedList(){
  this.head = null;
}
const list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(2);
list.head.next.next.next = new ListNode(1);

console.log(isPalindrome(list.head));

//Summary: Pushing all the node values into an array, we can then iterate through the array with a pointer on each end moving inward, checking if the values are equal or not (just like a palindrome string question). This is not the most efficient solution, would be O(2n) -> O(n) time and space. Could do it with O(1) space with a number of different pointers, getting to the middle of the list (fast and slow pointers), and then reversing the second half of the list and comparing to starting from the head and going to the middle.