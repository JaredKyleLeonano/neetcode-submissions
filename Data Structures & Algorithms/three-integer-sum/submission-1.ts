class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const output: number[][] = new Array()
        console.log(nums)
        const sorted = nums.sort((a, b) => a - b)

        for(let i = 0; i < sorted.length; i++){
            if(i > 0 && sorted[i] == sorted[i-1]){
                continue
            } else {
                console.log("this ran")
                let l = i + 1
                let r = sorted.length - 1
                while(l < r){
                    if(sorted[i] + sorted[l] + sorted[r] == 0){
                        output.push([sorted[i], sorted[l], sorted[r]])
                        l++
                        r--

                        while(sorted[l] == sorted[l-1]){
                            l++
                        }
                        while(sorted[r] == sorted[r+1]){
                            r--
                        }

                    } else if(sorted[i] + sorted[l] + sorted[r] > 0){
                        r--
                    } else if (sorted[i] + sorted[l] + sorted[r] < 0){
                        l++
                    }
                }
                
                
            }
        }
        console.log('sorted', sorted)
        console.log('output:', output)
        
        return output
    }
}
