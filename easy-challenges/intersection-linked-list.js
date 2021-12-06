//160. Intersection of Two Linked Lists
//Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.


function getIntersectionNode(headA, headB){
  const nodes = new Set();
  let current = headA;

  while(current){
    nodes.add(current);
    current = current.next;
  }

  let newCurrent = headB;
  while(newCurrent){
    if(nodes.has(newCurrent)){
      return newCurrent;
    }
    newCurrent = newCurrent.next;
  }

  return null;
}

//Summary: We can iterate through one list and add it to a set, then loop through the next list and check for if the set already contains the current node. If so, we can return the node, if not continue. 