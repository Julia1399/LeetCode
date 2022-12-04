/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    str = s.replace(/[^a-zа-яё0-9]/gi, '').toLowerCase();
    const reverse = str.split('').reverse().join('');
    if (str === reverse){
        return true
    }
    return false
};
