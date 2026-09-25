class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        //console.log(nums)
        const buckets = new Map()
        const maxNum = Math.max(...nums)

        //console.log('buckets initialized', buckets, maxNum)

        for (const num of nums){
            const normalized = num / (maxNum + 1)
            //console.log('output', Math.floor(normalized * nums.length))
            const key = Math.floor(normalized * nums.length)
            buckets.set(num, (buckets.get(num) || 0) + 1) 
        }

        const bucketsAsc = [...buckets.entries()].sort((a, b) => a[1] - b[1]).map(([key]) => key);
       // console.log("ordered", bucketsAsc)

        const output = []
        
        for (let i = 0; i < k; i++){
            output.push(bucketsAsc.pop())
        }

        return output
    }
}
