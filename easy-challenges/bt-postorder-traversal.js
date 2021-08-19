//Given the root of a binary tree, return the postorder traversal of it's nodes' values
//Postorder: left -> right -> current


function postorderTraversal(root){
  if(root === null){
    return [];
  }

  let nodes = [];

  const postOrder = (node) => {
    if(node.left){
      postOrder(node.left);
    }
    if(node.right){
      postOrder(node.right);
    }
    nodes.push(node.val);
  }

  postOrder(root);
  return nodes;
}