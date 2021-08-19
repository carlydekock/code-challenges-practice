//Given the root of a binary tree, return the preorder traversal of its nodes values
//Preorder: current -> left -> right

function preorderTraversal(root){
  if(root === null){
    return [];
  }

  let nodes = [];

  const preOrder = (node) => {
    nodes.push(node.val);

    if(node.left){
      preOrder(node.left);
    }

    if(node.right){
      preOrder(node.right);
    }
  }

  preOrder(root);
  return nodes;
}