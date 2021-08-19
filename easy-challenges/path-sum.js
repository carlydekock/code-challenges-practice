//Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equal the targetSum. A leaf is a node with no children

// Recursive
function hasPathSum(root, targetSum){
  if(root === null){
    return false;
  }

  if(targetSum === root.val && root.left === null & root.right === null){
    return true;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

//Iterative - not working for the way leetcode problem is setup
// function hasPathSum(root, targetSum){
//   if(root === null){
//     return false;
//   }

//   let nodes = [];
//   let values = [];
//   let sumValue = 0;
  
//   nodes.push(root);
//   values.push(root.value);

//   while(nodes.length){
//     root = nodes.pop();
//     sumValue = values.pop();

//     if(root.left){
//       nodes.push(root.left);
//       values.push(sumValue + root.left.value);
//     }

//     if(root.right){
//       nodes.push(root.right);
//       values.push(sumValue + root.right.value);
//     }

//     if(root.left === null && root.right === null){
//       if(sumValue === targetSum){
//         return true;
//       }
//     }
//     return false;
//   }
// }