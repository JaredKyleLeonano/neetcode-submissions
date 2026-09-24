class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const map = new Map()
        

        for (let i = 0; i < strs.length; i++){
            const alphabet = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++){
                alphabet[(strs[i].charCodeAt(j) - 'a'.charCodeAt(0))]++
            }

            const key = alphabet.toString()

            if(map.has(key)){
                map.get(key).push(strs[i])
            } else {
                map.set(key, [strs[i]])
            }
        }

        const output = Array.from(map.values())
        return output
    }
}
