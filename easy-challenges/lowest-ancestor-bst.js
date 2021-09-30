//235. Lowest Common Ancestor of a Binary Search Tree
//Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
//According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function lowestCommonAncestor(root, p, q){
  if(p.val < root.val && q.val < root.val){
    return lowestCommonAncestor(root.left, p, q);
  } else if(p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

//Summary: Since we know it's a BST, we can check the values of the p and q notes against the root value. All values less than will be to the left, and greater than will be to the right. If it's already split, we'll return the root. If not, we'll traverse to the left or right subtrees to check again.
//Pattern: BST - allows us to quickly know something about the placement of the values.