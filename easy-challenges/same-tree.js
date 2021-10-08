//Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

function isSameTree(p, q){
  if(p === null && q === null){
    return true;
  }

  if(p === null && q !== null){
    return false;
  }

  if(q === null && p !==null){
    return false;
  }

  if(p.val !== q.val){
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//Alternative function - a bit faster
function isSameTreeTwo(p, q){
  if(p === null && q === null){
    return true;
  }

  if(p !== null && q !== null){
    return (p.val === q.val && isSameTreeTwo(p.left, q.left) && isSameTreeTwo(p.right, q.right));
  }

  return false;
}

//Summary: To tell if the trees are identical, we need to traverse them at the same time, comparing values at each node. To do this, we can first check if the two are null, if so return true. Next, if they aren't null, then we want to return whether p.val === q.val && recursive call on the left side and right side. If we make it out of both of those conditionals, then one tree is null and the other is not, so we return false.
//Pattern: BT, recursive calls down the left and right subtrees.