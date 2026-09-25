class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        const buckets = new Map()

        for (const num of nums){
            buckets.set(num, (buckets.get(num) || 0) + 1) 
        }

        const bucketsAsc = [...buckets.entries()].sort((a, b) => b[1] - a[1]).map(([key]) => key);

        const output = bucketsAsc.slice(0,k)
        return output
    }
}
