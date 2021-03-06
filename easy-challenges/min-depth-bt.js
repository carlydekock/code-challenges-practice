//111. Minimum Depth of Binary Tree
//Given a binary tree, find its minimum depth.
//The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//Note: A leaf is a node with no children.
//Ex- Input: root = [3,9,20,null,null,15,7], Output: 2

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function minDepth(root){
  if(root === null){
    return 0;
  }
  if(root.left === null && root.right === null){
    return 1;
  }
  if(root.left === null){
    return 1 + minDepth(root.right);
  }
  if(root.right === null){
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

function findMinDepth(root){
  if(root === null){
    return 0;
  } 
  let depth = 1;
  const stack = [root];
  while(stack.length > 0){
    let length = stack.length;
    for(let i = 0; i < length; i++){
      const node = stack.shift();
      if(node === null){
        return 0;
      }
      if(node.left === null && node.right === null){
        return depth;
      }
      if(node.left !== null){
        stack.push(node.left);
      }
      if(node.right !== null){
        stack.push(node.right);
      }
    }
    depth++;
  }
  return depth;
}

//Summary: To find the minimum depth, or shortest path to a leaf node in the tree, we can use recursion or level order traversal. Using recursion, after we've checked the root, we go into three conditionals -> left and right are null (at a leaf), left is null and need to call minDepth on right, right is null and need to call minDepth on left, then we take the min of results. Iteratively, we can traverse level by level in the tree until we reach the first leaf node, pushing into the stack and shifting off the stack to examine each node. We have a similar set of conditionals - if node === null, if left === null && right === null, if left !== null, if right !== null.
