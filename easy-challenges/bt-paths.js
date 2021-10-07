//257. Binary Tree Paths
//Given the root of a binary tree, return all root-to-leaf paths in any order.
//A leaf is a node with no children.

//Start at root, add current node
//Constantly traverse subtrees if children, adding next child's value to the path
//DFS

function binaryTreePaths(root){
  const paths = [];
  if(root === null){
    return paths;
  }
  dfs(root, '', paths);
  return paths;
}

function dfs(node, currentPath, paths){
  currentPath += node.val;
  if(node.left === null && node.right === null){
    paths.push(currentPath);
    return;
  }
  if(node.left !== null){
    dfs(node.left, currentPath + '->', paths);
  }
  if(node.right !== null){
    dfs(node.right, currentPath + '->', paths);
  }
}

//Summary: Starting at the root, adding each of the paths as strings to an array. Using a helper function that takes the current node, current path, and the paths array, adding the current node value to the current path string. If it's a leaf node, then push the current path into the paths array. If it's not a leaf node -> continue traversing the left side and the right side.
//Pattern: Recursion, DFS.