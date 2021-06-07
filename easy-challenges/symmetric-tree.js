//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//Example - input: root = [1,2,2,3,4,4,3]
//Output: true

function isSymmetric(root){

  if(root === null){
    return true;
  }

  return isMirror(root.left, root.right);

}

const isMirror = function(tree1, tree2){
  if(tree1 === null || tree2 === null){
    return tree1 === tree2;
  }

  if(tree1.val !== tree2.val){
    return false;
  }

  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}
