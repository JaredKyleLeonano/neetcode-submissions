class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]) {
        const set = new Set(nums)

        let longest = 0
        for (const num of set){
            if(!set.has(num-1)){
                let current = num
                let length = 1
                while(set.has(current + 1)){
                    current += 1
                    length += 1
                }
                if(length > longest){
                    longest = length
                }  
            }
        }

        return longest
    }
}
