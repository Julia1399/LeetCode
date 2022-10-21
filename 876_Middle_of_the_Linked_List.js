/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function getCount(head)
{
    var temp = head;
    var count = 0;
    while (temp !== null)
    {
        count++;
        temp = temp.next;
    }
    return count;
}


function removeNode(list, value) {
    var node = list,
        last;

    if (node && node.val === value) {
        return node.next;
    }

    while (node && node.val !== value) {
        last = node,
        node = node.next;
    }
    if (last && node.val === value) {
        last.next = node.next;
    }
    return list;
}

function findElement(index, head) {
    let currentNode = head;
    let count = 0;

    while (currentNode) {
        console.log(currentNode)
      if (count === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    
    return -1;
  }


var middleNode = function(head) {
    var count = getCount(head);
    var mid = Math.floor(count/2)
    var element = 0;
    element = findElement(mid, head) 
    return element
    
};
