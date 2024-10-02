// https://leetcode.com/problems/merge-two-sorted-lists/description/

// TC -> O(n)
// SC -> O(n + m) -> O(n)
// Pattern: Two Pointers
var mergeTwoLists = function (list1, list2) {
  const node = new ListNode();
  let curr = node;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return node.next;
};
