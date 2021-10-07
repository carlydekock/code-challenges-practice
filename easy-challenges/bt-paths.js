//257. Binary Tree Paths
//Given the root of a binary tree, return all root-to-leaf paths in any order.
//A leaf is a node with no children.
//taking current node's value -> then moving to children
//add string that represents the path to a list

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