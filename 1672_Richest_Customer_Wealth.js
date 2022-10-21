/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var newArr = accounts.map(row =>{
        let sum = 0;
        row.forEach(element =>{
            sum = sum+element;
        })
        return sum
    }).sort( (a, b) => b - a );
    
    return newArr[0]
};
