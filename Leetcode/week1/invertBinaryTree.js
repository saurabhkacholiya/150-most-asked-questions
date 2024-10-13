// pattern -> DFS
// TC -> O(n)  nodes in the tree, as every node is visited exactly once.
// SC -> O(h) where is the h is the height of binary tree why??

// In a balanced binary tree, at each level k, the number of nodes is indeed 2^𝑘.
// However, this does not mean that there will be 2^𝑘
// function calls on the stack at the same time. Here's why:

// Example:
// Let’s say you have a balanced binary tree of height 3:

// Level 0 (root): 1 node → call invertTree(root).
// Level 1: 2 nodes → call invertTree(root.left) and then invertTree(root.right).
// But these are called one after the other, so there are only 2 calls on the stack at the deepest point.
// Level 2: 4 nodes → call invertTree(root.left.left), but again,
// this is done recursively. At most, there are 3 function calls on the stack at any point
//  (one for each level until the recursion unwinds).
// Thus, the number of function calls on the stack is proportional to the height of the tree,
// not the number of nodes at each level.

// My conclusion
// So it will start with root and root.left and root.left.left
// and once we the leaf node is reached the stack will pop back but stack will
// have h number of the function stacked on it. so at any given point the space complexity is O(h)

// n ≈ 2^h
// h = log base2 n

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
