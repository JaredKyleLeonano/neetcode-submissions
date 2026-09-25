class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        //console.log(nums)
        const buckets = new Map()
        //const maxNum = Math.max(...nums)

        //console.log('buckets initialized', buckets, maxNum)

        for (const num of nums){
            buckets.set(num, (buckets.get(num) || 0) + 1) 
        }

        const bucketsAsc = [...buckets.entries()].sort((a, b) => b[1] - a[1]).map(([key]) => key);
        
        const output = bucketsAsc.slice(0,k)
        return output
    }
}
