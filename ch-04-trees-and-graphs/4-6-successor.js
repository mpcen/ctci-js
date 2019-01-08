/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(!root || !p) return null;
    
    let successor = null;
    
    while(root) {
        if(p.val < root.val) {
            successor = root;
            root = root.left;
        } else {
            root = root.right
        }
    }
    
    return successor;
};