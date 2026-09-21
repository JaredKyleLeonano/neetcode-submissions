class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {

        if (s.length != t.length){
            return false
        }
        const sTable = new Map<String, number>()
        const tTable = new Map<String, number>()
        const totalCount = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++){
            totalCount[s.charCodeAt(i) - 97]++
            totalCount[t.charCodeAt(i) - 97]--
        }

        return totalCount.every((count) => count === 0);
        
    }
}
