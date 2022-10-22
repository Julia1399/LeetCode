/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) { 
    newArray = []
    function printList(head) {
    newArray.push(head.val); // выводим текущий элемент
    if (head.next) {
        printList(head.next); // делаем то же самое для остальной части списка
      }
    return newArray
    }
    newArray =  printList(head)
    var cnt = newArray.length - 1
    for (var i = 0; i<newArray.length; i++){
        if(newArray[i] !== newArray[cnt-i]){
            return false
        }        
    }    
    return true
};
