class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freqMap = new Map()

        let longest = 0
        let l = 0
        // formula: window length - mostFrequent <= k to be valid
        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);
            // if(!freqMap.has(s[r])){
            //     freqMap.set(s[r], 1)
            // } else{
            //     freqMap.set(s[r], freqMap.get(s[r]) + 1)
            // }
            

            // console.log("updated freqMap", freqMap)

            const mostFrequent = Math.max(...freqMap.values())

            while(!((r-l + 1) - mostFrequent <= k)){
                // console.log("invalid window detected")
                freqMap.set(s[l], freqMap.get(s[l]) - 1)
                // console.log("delete from window update:", freqMap)
                l++
            }

            const currentLength = r - l + 1
            longest = Math.max(longest, currentLength)
            // console.log("currentLength:", currentLength, "longest:", longest)
        }


        return longest
    }
}
