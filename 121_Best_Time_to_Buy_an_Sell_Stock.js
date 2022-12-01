/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let rigth = 1;
    let profit = 0;
    while (rigth<prices.length){
        if (prices[rigth]-prices[left] > 0){
            profit = Math.max(prices[rigth]-prices[left], profit);
        } else {
            left = rigth;
        }
        rigth++
    }
    return profit
};
