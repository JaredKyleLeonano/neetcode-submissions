class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0

        let l = 0
        let r = 1

        while(r < prices.length){
            maxProfit = Math.max(maxProfit, prices[r] - prices[l])

            if(prices[l] > prices[r]){
                l = r
                r++
            } else {
                r++
            }
        }

        return maxProfit
    }
}
