//236. Lowest Common Ancestor of a Binary Tree
//Video tutorial reference: https://www.youtube.com/watch?v=py3R23aAPCA&ab_channel=BackToBackSWE
//Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function lowestAncestor(root, p, q){
  if(!root || root === p || root === q){
    return root;
  }
  const left = lowestAncestor(root.left, p, q);
  const right = lowestAncestor(root.right, p, q);
  if(!left) return right; //p and q are in the right subtree
  if(!right) return left; //p and q are in the left subtree
  return root; //p is in one side and q is in the other
}

//Summary: Working from the bottom to the top, we want to identify the lowest common ancestor of the two nodes. This will occur if we arrive at a node, or if we get one of the nodes on the left, and one on the right of the current node (root). Base case is if the root is null, or we are at p or q. Otherwise, we'll recursively move down the tree on the left and right. If nothing on the left, go to the right, and vice versa. 