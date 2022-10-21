/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var rsN = ransomNote.split('');
    var mag = magazine.split('');
    var count = 0;
    for(let j = 0; j<rsN.length; j++){
        for (let i = 0; i<mag.length; i++){
            if (mag[i] === rsN[j]){
                mag.splice(i,1);
                count++
                break
            }
        }
        console.log(count, mag)
        if (rsN.length === count){
                return true
            }
    }
    return false
};
