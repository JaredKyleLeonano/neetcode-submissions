class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longest = 0
        const seen = new Set()
        
        let l = 0
        for(let r = 0; r < s.length; r++){
            while(seen.has(s[r])){
                seen.delete(s[l])
                l++
            } 
            seen.add(s[r])
            longest = Math.max(longest, seen.size)
        }

        return longest
    }
}
